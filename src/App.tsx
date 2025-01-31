import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
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

  const isSameWeek = (date1: Date, date2: Date) => {
    const startOfWeek = new Date(date2);
    startOfWeek.setHours(0, 0, 0, 0);
    startOfWeek.setDate(startOfWeek.getDate() - startOfWeek.getDay()); // Set to Sunday
  
    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(endOfWeek.getDate() + 6); // Set to Saturday
  
    return date1 >= startOfWeek && date1 <= endOfWeek;
  };
  
  const filterCurrentWeekEvents = (events: EventType[]) => {
    const today = new Date();
    return events.filter(event => isSameWeek(new Date(event.event_date), today));
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <h1 className="text-center my-5">Tokyo tech events calendar</h1>
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4">
          <h2 className="mb-3">This week's events</h2>
            { filterCurrentWeekEvents(events).length === 0 ? (
              <p>Oops, no events this week...</p>
            ) : (
            filterCurrentWeekEvents(events).map((event) => (
              <EventItem event={event} />
            ))
          )}
          </div>
          <div className="col-12 col-md-6 col-lg-8">
            <EventCalendar />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
