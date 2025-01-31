import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMeetup } from "@fortawesome/free-brands-svg-icons";
import { EventType } from '../types';
// import ReactHtmlParser from 'react-html-parser';


const EventItem = ({event}: { event: EventType }) => {
  
  const formatDate = (eventDate: Date) => {
    const shortDate = new Date(eventDate).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
    return shortDate;
};


  return (
    <div className="mb-3">
      <div className="card">
        <div className="card-body p-2">
          <p className="card-text text-danger mb-1 small">
            {formatDate(event.event_date)} {event.name.split('| ')[0]}
          </p>
          <h5 className="card-title mb-2 fs-6">{event.name.split('| ')[1]}</h5>
          <a href={event.url} style={{width: "fit-content"}} className="btn btn-danger d-flex align-items-center gap-1 py-1 p-2">
            <FontAwesomeIcon className="fs-5" icon={faMeetup} /> <span className="fs-6">Check out the event</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default EventItem;
