import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMeetup } from '@fortawesome/free-brands-svg-icons';
import { EventType } from '../types';

const EventCalendarItem = ({ event }: { event: EventType }) => {
  const truncateString = (str: string) => str.length > 50 ? str.slice(0, 50) + "..." : str;

  return (
    <div className="card">
      <div className="card-body p-1 text-start d-flex align-items-start gap-1">
        <p className="card-text small mb-1">{truncateString(event.name)}</p>
        <a
          href={event.url}
          style={{ width: 'fit-content' }}
          className="btn btn-danger py-0 px-1"
        >
          <FontAwesomeIcon icon={faMeetup} />
        </a>
      </div>
    </div>
  );
};

export default EventCalendarItem;
