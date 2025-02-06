import { EventType, GroupType } from '../types';
import { getPlatformIcon } from '../utils';
import { useEffect, useState } from 'react';

const EventCalendarItem = ({ event }: { event: EventType }) => {
  const [group, setGroup] = useState<GroupType>();

  useEffect(() => {
    const getGroup = async () => {
      const url = `https://tokyo-events.herokuapp.com/api/groups`;
      const res = await fetch(url);
      const groups = await res.json();
      setGroup(
        groups.find(
          (group: GroupType) => group.id === event.tky_even_meetup_id,
        ),
      );
    };
    getGroup();
  }, [event]);

  return (
    <a href={event.url} target="_blank" className='text-decoration-none w-100'>
      <div className="card m-0">
        <div className="card-body p-1 text-start">
          <div className="d-flex justify-content-between align-items-center mb-1">
            <p className="m-0 fw-bold">{event.name.slice(1).split('| ')[0]}</p>
            <img
              height="24"
              src={getPlatformIcon(group?.platform || 'meetup')}
              alt=""
            />{' '}
          </div>
          <p className="card-text small mb-1 ellipsis">
            {event.name.split('| ')[1]}
          </p>
        </div>
      </div>
    </a>
  );
};

export default EventCalendarItem;
