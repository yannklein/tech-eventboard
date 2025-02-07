import { useEffect, useState } from 'react';
import { GroupType } from '../types';
import { faMeetup } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Dropdown from 'react-bootstrap/Dropdown';
import ListGroup from 'react-bootstrap/ListGroup';
import { getGroupURL, getPlatformIcon } from '../utils';

const EventGroups = ({ city }: { city: string }) => {
  const [groups, setGroups] = useState<GroupType[]>([]);
  const [groupLoaded, setGroupLoaded] = useState(false);

  useEffect(() => {
    const getGroups = async () => {
      const url = `https://tokyo-events.herokuapp.com/api/groups?city=${city}`;
      const res = await fetch(url);
      const events = await res.json();
      setGroups(events);
      setGroupLoaded(true);
    };
    getGroups();
  }, [city]);

  const formatCaption = (caption: string) => {
    return caption.replace(/\d+/g, '').split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
  }

  return (
    <Dropdown>
      <Dropdown.Toggle split variant='white' className="w-100 d-flex align-items-center justify-content-between gap-3 border rounded" >
          <h3 className="fs-5 fw-medium d-flex align-items-center m-0">
            <FontAwesomeIcon
              className="fs-1 me-2 text-danger"
              icon={faMeetup}
            />{' '}
            Followed Meetups
          </h3>
          </Dropdown.Toggle>
          <Dropdown.Menu className='shadow border-0 w-100 p-0'>
          {!groupLoaded ? (
            <p>Loading groups...</p>
          ) : (
            <ListGroup variant="flush">
              {groups.map((group) => (
                <ListGroup.Item action href={getGroupURL(group)} target='_blank'  key={group.id} className='d-flex align-items-center gap-1 p-2'>
                  <img style={{ filter: 'grayscale(100%)'}} height="20" width="20" src={getPlatformIcon(group?.platform || 'meetup')} alt="" />{' '}
                  <span>{formatCaption(group.name)}</span>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
         </Dropdown.Menu>
    </Dropdown>
  );
};

export default EventGroups;
