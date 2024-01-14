import { Moment } from 'moment';

import { IEvent } from '../models/IEvent';
import { formatDate } from './helpers/date';

export const dateCellRender = (value: Moment, events: Array<IEvent>) => {
  const formattedDate = formatDate(value);
  const currentDayEvents = events.filter((event) => event.date === formattedDate);
  return (
    <ul className="events">
      {currentDayEvents.map((currEv, idx) => (
        <div key={idx}>{currEv.description}</div>
      ))}
    </ul>
  );
};
