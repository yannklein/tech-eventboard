import { useState } from 'react';
import Calendar, { TileArgs } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import EventItem from './EventItem';
import { EventType } from '../types';
type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const EventCalendar = ({events}: { events: EventType[] }) => {
  const [value, onChange] = useState<Value>(new Date());

  const formatDate = (date: Date | string) => 
    `${new Date(date).getFullYear()}${(new Date(date).getMonth() + 1).toString().padStart(2, '0')}${new Date(date).getDate().toString().padStart(2, '0')}`;
  
  const showDayEvent = ({ date }: { date: Date }) => {
      const dayEvents = events.filter(event => formatDate(event.event_date) === formatDate(date));
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
