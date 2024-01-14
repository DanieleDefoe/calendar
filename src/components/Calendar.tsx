import { Calendar } from 'antd';
import { IEvent } from '../models/IEvent';
import { FC } from 'react';
import { dateCellRender } from '../utils/renderDateCell';
import { Moment } from 'moment';

interface Props {
  events: Array<IEvent>;
}

const EventCalendar: FC<Props> = ({ events }) => {
  return (
    <Calendar cellRender={(value) => dateCellRender(value as Moment, events)} />
  );
};

export default EventCalendar;
