import { useEffect, useState } from 'react';
import EventItem from './EventItem';
import EventCalendar from './EventCalendar';
import { EventType } from '../types';
import { useSearchParams } from 'react-router-dom';
import AppNavbar from './AppNavbar';

const EventIndex = () => {
  const [searchParams] = useSearchParams();
  const city = searchParams.get("city") || "tokyo";

  const [events, setEvents] = useState<EventType[]>([]);
  const [eventLoaded, setEventLoaded] = useState(false);

  useEffect(() => {
    const getEvents = async () => {
      const url = `https://tokyo-events.herokuapp.com/api/events?city=${city}`;
      const res = await fetch(url);
      const events = await res.json();
      setEvents(events);
      setEventLoaded(true);
    };
    getEvents();
  }, [city]);

  const isNext7Days = (eventDate: Date, referenceDate: Date) => {
    const start = new Date(referenceDate);
    start.setHours(0, 0, 0, 0); // Normalize to start of the day

    const end = new Date(start);
    end.setDate(end.getDate() + 7); // 7 days from now

    return eventDate >= start && eventDate < end;
  };

  const filterfutureEvents = (events: EventType[]) => {
    const today = new Date();
    return events.filter((event) => new Date(event.event_date) >= today);
  };

  const filterNext7DaysEvents = (events: EventType[]) => {
    const today = new Date();
    return events.filter((event) =>
      isNext7Days(new Date(event.event_date), today),
    );
  };

  return (
    <>
      <AppNavbar city={city} />
      <div className="d-none d-lg-flex container-fluid flex-grow-1 d-flex flex-column pb-5">
        <div className="row flex-grow-1 my-3">
          <div className="col-12 col-lg-3">
            <h2 className="">This week's events</h2>
            {filterNext7DaysEvents(events).length === 0 ? (
              eventLoaded ? (
                <p>Oops, no events this week...</p>
              ) : (
                <p>Loading events...</p>
              )
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
        {filterfutureEvents(events).length === 0 ? (
          eventLoaded ? (
            <p>Oops, no events this week...</p>
          ) : (
            <p>Loading events...</p>
          )
        ) : (
          filterfutureEvents(events).map((event) => (
            <EventItem event={event} key={event.id} />
          ))
        )}
      </div>
    </>
  );
};

export default EventIndex;
