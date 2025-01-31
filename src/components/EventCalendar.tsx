import { useState } from 'react';
import Calendar, { TileArgs } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import EventItem from './EventItem';
import { EventType } from '../types';
type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const EventCalendar = ({events}: { events: EventType[] }) => {
  const [value, onChange] = useState<Value>(new Date());

  const showDayEvent = ({ date }: { date: Date }) => {
      const eventDate = (event: EventType) => (new Date(event?.event_date)).getDate();
      const today = new Date(date).getDate();
      console.log(eventDate(events[0]), today);
      const dayEvents = events.filter(event => eventDate(event) === today)
      return dayEvents.map(dayEvent => <EventItem event={dayEvent} />); 
  } 

  return (
    <div className="w-100" style={{ height: '60vh' }}>
      <Calendar
        className="w-100 h-100 border-0 shadow"
        onChange={onChange}
        value={value}
        tileClassName="h-50"
        tileContent={showDayEvent}
      />
    </div>
  );
};

export default EventCalendar;
