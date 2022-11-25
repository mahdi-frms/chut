export interface User {
  username: string,
  password: string
}

export enum Status {
  Sucess = 0,
  InvalidCredentials = 1,
}