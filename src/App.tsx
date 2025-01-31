import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from './components/AppNavbar';
import EventItem from './components/EventItem';
import EventCalendar from './components/EventCalendar';
import { EventType } from './types';

function App() {
  const [events, setEvents] = useState<EventType[]>([]);

  useEffect(() => {
    const getEvents = async () => {
      const url = 'https://tokyo-events.herokuapp.com/api';
      const res = await fetch(url);
      const events = await res.json();
      setEvents(events);
    };
    getEvents();
  }, []);

  const isNext7Days = (eventDate: Date, referenceDate: Date) => {
    const start = new Date(referenceDate);
    start.setHours(0, 0, 0, 0); // Normalize to start of the day

    const end = new Date(start);
    end.setDate(end.getDate() + 7); // 7 days from now

    return eventDate >= start && eventDate < end;
  };

  const filterNext7DaysEvents = (events: EventType[]) => {
    const today = new Date();
    return events.filter((event) =>
      isNext7Days(new Date(event.event_date), today),
    );
  };

  return (
    <div className="min-vh-100 vh-100 d-flex flex-column">
      <AppNavbar />
      <div className="d-none d-lg-flex container-fluid flex-grow-1 d-flex flex-column pb-5">
        <div className="row flex-grow-1 my-3">
          <div className="col-12 col-lg-3">
            <h2 className="">This week's events</h2>
            {filterNext7DaysEvents(events).length === 0 ? (
              <p>Oops, no events this week...</p>
            ) : (
              filterNext7DaysEvents(events).map((event) => (
                <EventItem event={event} key={event.id} />
              ))
            )}
          </div>
          <div className="col-12 col-lg-9">
            <EventCalendar events={events} />
          </div>
        </div>
      </div>
      <div className="d-lg-none container-fluid">
        {events.length === 0 ? (
          <p>Oops, no events this week...</p>
        ) : (
          events.map((event) => (
            <EventItem event={event} key={event.id} />
          ))
        )}
      </div>
    </div>
  );
}

export default App;
