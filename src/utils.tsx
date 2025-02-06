import doorkeeper from './assets/doorkeeper.png';
import eventbrite from './assets/eventbrite.svg';
import meetup from './assets/meetup.png';

export const getPlatformIcon = (platform: string) => {
  switch (platform) {
    case 'meetup':
      return meetup;
    case 'eventbrite':
      return eventbrite;
    case 'doorkeeper':
      return doorkeeper;
    default:
      return meetup;
  }
};

export const capitalize = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1);
