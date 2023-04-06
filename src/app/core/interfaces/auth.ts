import { User } from './user';



export interface Login {
  email: string;
  password: string;
}

export interface Register {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface loginResponse {
  user: User;
  accessToken: string;
}
