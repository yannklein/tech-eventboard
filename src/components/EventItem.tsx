import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { EventType, GroupType } from '../types';
import { useEffect, useState } from 'react';

import { getPlatformIcon } from '../utils';

const EventItem = ({ event }: { event: EventType }) => {
  const formatDate = (eventDate: Date) => {
    const shortDate = new Date(eventDate).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      timeZone: 'UTC',
    });
    return shortDate;
  };

  const [group, setGroup] = useState<GroupType>();

  useEffect(() => {
    const getGroup = async () => {
      const url = `https://tokyo-events.herokuapp.com/api/groups`;
      const res = await fetch(url);
      const groups = await res.json();
      setGroup(groups.find((group: GroupType) => group.id === event.tky_even_meetup_id));
    };
    getGroup();
  }, [event]);

  return (
    <div className="mb-3">
      <div className="card">
        <div className="card-body p-2">
          <p className="text-danger m-0 small">
            {formatDate(event.event_date)} {event.name.split('| ')[0]}
          </p>
          <p className="mb-1 small">
            <FontAwesomeIcon icon={faLocationDot} /> {event.venue}
          </p>
          <h5 className="mb-2 fs-5">{event.name.split('| ')[1]}</h5>
          <a
            href={event.url}
            style={{ width: 'fit-content' }}
            className="btn bg-danger-subtle d-flex align-items-center gap-2 px-2 py-1"
          >
            <img height="24" src={getPlatformIcon(group?.platform || 'meetup')} alt="" />{' '}
            <span className="fs-6">Check out the event</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default EventItem;
