export interface User {
  username: string,
  password: string
}

export enum Status {
  Success = 0,
  InvalidCredentials = 1,
  UnavailableUsername = 2,
  TokenNotProvided = 3,
  InvalidToken = 4,
  ReceiverIDInvalid = 5,
  FieldNotProvided = 6,
}

export const JWT_COOKIE = "jwt-token"