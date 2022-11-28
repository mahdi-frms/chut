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
}

export const JwtCookie = "jwt-token"