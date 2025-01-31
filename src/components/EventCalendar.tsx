import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { EventType } from '../types';
import EventCalendarItem from './EventCalendarItem';
type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const EventCalendar = ({events}: { events: EventType[] }) => {
  const [value, onChange] = useState<Value>(new Date());

  const formatDate = (date: Date | string) => 
    `${new Date(date).getFullYear()}${(new Date(date).getMonth() + 1).toString().padStart(2, '0')}${new Date(date).getDate().toString().padStart(2, '0')}`;
  
  const showDayEvent = ({ date }: { date: Date }) => {
      const dayEvents = events.filter(event => formatDate(event.event_date) === formatDate(date));
      if (dayEvents.length === 0) return <div style={{height: "56px"}}></div>;
      return dayEvents.map(dayEvent => <EventCalendarItem event={dayEvent} />); 
  } 

  return (
    <div className="w-100 h-100">
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
