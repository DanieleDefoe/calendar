import { message } from 'antd';

import UserService from '@/api/UserService';
import { IEvent } from '@/models/IEvent';
import { User } from '@/models/User';
import { authorOrGuest } from '@/utils/helpers/authorOfGuest';

import { AppDispatch } from '../..';
import { EventActionEnum } from '../@types/event';

export const EventActionCreators = {
  setGuests: (payload: Array<User>) => ({
    type: EventActionEnum.SET_GUESTS,
    payload,
  }),
  setEvents: (payload: Array<IEvent>) => ({
    type: EventActionEnum.SET_EVENTS,
    payload,
  }),
  fetchGuests: () => async (dispatch: AppDispatch) => {
    try {
      const { data: guests } = await UserService.getUsers();
      dispatch(EventActionCreators.setGuests(guests));
    } catch (error) {
      console.log(error);
      message.error('An error occured while fetching guests');
    }
  },
  createEvent: (event: IEvent) => async (dispatch: AppDispatch) => {
    try {
      const events = localStorage.getItem('events') ?? '[]';
      const json = JSON.parse(events) as IEvent[];
      json.push(event);
      dispatch(EventActionCreators.setEvents(json));
      localStorage.setItem('events', JSON.stringify(json));
    } catch (err) {
      console.log(err);
      message.error('An error occured while creating an event');
    }
  },
  fetchEvents: (username: string) => async (dispatch: AppDispatch) => {
    try {
      const events = localStorage.getItem('events') ?? '[]';
      const json = JSON.parse(events) as IEvent[];
      const currentUserEvents = json.filter((event) => authorOrGuest(event, username));
      dispatch(EventActionCreators.setEvents(currentUserEvents));
    } catch (err) {
      console.log(err);
      message.error('An error occured while fetching Guests');
    }
  },
};
