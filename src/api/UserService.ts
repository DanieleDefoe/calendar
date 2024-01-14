import axios, { AxiosResponse } from 'axios';

import { User } from '../models/User';

export default class UserService {
  static async getUsers(): Promise<AxiosResponse<User[]>> {
    return axios.get<User[]>('./users.json');
  }
}
