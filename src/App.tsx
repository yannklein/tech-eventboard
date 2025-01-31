import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import EventItem from './components/EventItem';
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

  return (
    <>
      <Navbar />
      <div className="container">
        <h1 className="text-center my-5">Tokyo tech events calendar</h1>
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4">
          <h2 className="mb-3">This week's events</h2>
            {events.map((event) => (
              <EventItem event={event} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
