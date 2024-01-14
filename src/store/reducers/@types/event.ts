import { IEvent } from '../../../models/IEvent';
import { User } from '../../../models/User';

export interface EventState {
  guests: User[];
  events: IEvent[];
}

export const enum EventActionEnum {
  SET_GUESTS = 'SET_GUESTS',
  SET_EVENTS = 'SET_EVENTS',
}

export interface SetGuestsAction {
  type: EventActionEnum.SET_GUESTS;
  payload: User[];
}

export interface SetEventsAction {
  type: EventActionEnum.SET_EVENTS;
  payload: IEvent[];
}

export type EventAction = SetGuestsAction | SetEventsAction;
