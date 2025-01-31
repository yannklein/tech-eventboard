import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const EventCalendar = () => {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div className="w-100" style={{ height: '60vh' }}>
      <Calendar
        className="w-100 h-100 border-0 shadow"
        onChange={onChange}
        value={value}
        tileClassName="h-100"
        
      />
    </div>
  );
};

export default EventCalendar;
