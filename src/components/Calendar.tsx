import { FC } from 'react';

import { Calendar } from 'antd';
import { Moment } from 'moment';

import { IEvent } from '../models/IEvent';
import { dateCellRender } from '../utils/renderDateCell';

interface Props {
  events: Array<IEvent>;
}

const EventCalendar: FC<Props> = ({ events }) => {
  return <Calendar cellRender={(value) => dateCellRender(value as Moment, events)} />;
};

export default EventCalendar;
