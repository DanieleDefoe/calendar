import { User } from '../../models/User';

export const findUser = (user: User, username: string, password: string) =>
  user.username === username && user.password === password;
