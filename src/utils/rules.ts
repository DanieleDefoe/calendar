import moment, { Moment } from 'moment';

export const rules = {
  required(message: string = 'Required field!') {
    return {
      required: true,
      message,
    };
  },
  isDateAfter: (message: string) => () => ({
    validator(_: unknown, value?: Moment) {
      if (value && value.unix() >= moment().unix()) {
        return Promise.resolve();
      }
      return Promise.reject(new Error(message));
    },
  }),
};
