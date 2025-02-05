import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { EventType } from '../types';
import EventCalendarItem from './EventCalendarItem';
type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const EventCalendar = ({events}: { events: EventType[] }) => {
  const [value, onChange] = useState<Value>(new Date());

  const formatMeetupDate = (eventDate: Date) => {
    return eventDate.toString().split("T")[0];
  };

  const formatJsDate = (date: Date) => 
    `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;

  const showDayEvent = ({ date }: { date: Date }) => {      
      const dayEvents = events.filter(event => formatMeetupDate(event.event_date) === formatJsDate(date))
      console.log(date.toISOString().slice(0, 10));
      
      if (dayEvents.length === 0) return <div style={{height: "56px"}}></div>;
      return dayEvents.map(dayEvent => <EventCalendarItem event={dayEvent} key={dayEvent.id} />); 
  } 

  return (
    <div className="w-100 h-100">
      <Calendar
        className="w-100 h-100 border-0 shadow"
        onChange={onChange}
        value={value}
        tileContent={showDayEvent}
      />
    </div>
  );
};

export default EventCalendar;
