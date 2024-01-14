import { type Moment } from 'moment';

export const formatDate = (date: Moment): string => {
  return date.format('DD/MM/YYYY');
};
