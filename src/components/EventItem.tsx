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
        <div className="card-body">
          <p className="card-text text-danger">
            {formatDate(event.event_date)}
          </p>
          <h5 className="card-title mb-3">{event.name}</h5>
          <a href={event.url} style={{width: "fit-content"}} className="btn btn-danger d-flex align-items-center gap-3 p-2">
            <FontAwesomeIcon className="fs-3" icon={faMeetup} /> Check out the event
          </a>
        </div>
      </div>
    </div>
  );
};

export default EventItem;
