export interface User {
  username: string,
  password: string
}

export enum Status {
  Sucess = 0,
  InvalidCredentials = 1,
  UnavailableUsername = 2,
  TokenNotProvided = 3,
  InvalidToken = 4,
}