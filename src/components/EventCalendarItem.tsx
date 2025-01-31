import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMeetup } from '@fortawesome/free-brands-svg-icons';
import { EventType } from '../types';

const EventCalendarItem = ({ event }: { event: EventType }) => {
  return (
    <div className="card m-0" style={{ height: '90%' }}>
      <div className="card-body p-1 text-start">
        <div className="d-flex justify-content-between align-items-center">
          <p className="mb-1 fw-bold">{event.name.slice(1).split('| ')[0]}</p>
          <a
            href={event.url}
            style={{ width: 'fit-content' }}
            className="btn btn-danger py-0 px-1 ms-1 mb-1"
          >
            <FontAwesomeIcon icon={faMeetup} />
          </a>
        </div>
        <p className="card-text small mb-1 ellipsis">
          {event.name.split('| ')[1]}
        </p>
      </div>
    </div>
  );
};

export default EventCalendarItem;
