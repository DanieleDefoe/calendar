import { IEvent } from '../../models/IEvent';

export const authorOrGuest = (event: IEvent, username: string) => event.quest === username || event.author === username;
