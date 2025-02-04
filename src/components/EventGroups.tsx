import { useEffect, useState } from 'react';
import { GroupType } from '../types';
import { faMeetup } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Dropdown from 'react-bootstrap/Dropdown';
import ListGroup from 'react-bootstrap/ListGroup';

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
          <Dropdown.Menu>
          {!groupLoaded ? (
            <p>Loading groups...</p>
          ) : (
            <ListGroup variant="flush">
              {groups.map((group) => (
                <ListGroup.Item action href={`${group.name}`} key={group.id}>
                  <FontAwesomeIcon className="fs-5 me-2" icon={faMeetup} />{' '}
                  {group.name}
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
         </Dropdown.Menu>
    </Dropdown>
  );
};

export default EventGroups;
