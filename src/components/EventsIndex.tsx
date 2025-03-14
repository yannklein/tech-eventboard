import { useEffect, useState } from 'react';
import EventItem from './EventItem';
import EventCalendar from './EventCalendar';
import { EventType } from '../types';
import { useSearchParams } from 'react-router-dom';
import AppNavbar from './AppNavbar';
import { capitalize } from '../utils';
import EventGroups from './EventGroups';
import EventLoadingMessage from './EventLoadingMessage';

const EventIndex = () => {
  const [searchParams] = useSearchParams();
  const city = searchParams.get('city') || 'tokyo';

  useEffect(() => {
    document.title = `Tech events in ${capitalize(city)}`;
  }, [city]);

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

  const filterfutureEvents = (events: EventType[]) => {
    const today = new Date();
    return events.filter((event) => new Date(event.event_date) >= today);
  };

  return (
    <>
      <AppNavbar city={city} />
      <div className="d-none d-lg-flex container-fluid flex-grow-1 d-flex flex-column pb-5">
        <div className="row flex-grow-1 my-3">
          <div className="col-12 col-lg-3">
            <EventGroups city={city} />
            <h3 className="mt-4">Events coming up</h3>
            {filterfutureEvents(events).length === 0 ? (
              eventLoaded ? (
                <p>Oops, no events this week...</p>
              ) : (
                <EventLoadingMessage />
              )
            ) : (
              filterfutureEvents(events).slice(0,6).map((event) => (
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
        <EventGroups city={city} />
        <div className='mt-4'>
          {filterfutureEvents(events).length === 0 ? (
            eventLoaded ? (
              <p>Oops, no events this week...</p>
            ) : (
              <EventLoadingMessage />
            )
          ) : (
            filterfutureEvents(events).map((event) => (
              <EventItem event={event} key={event.id} />
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default EventIndex;
