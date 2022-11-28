import * as UserService from '@chut/user';
import { User } from '@chut/types';
import * as jwt from 'jsonwebtoken';

const JWT_KEY = process.env['JWT_KEY'] || 'secret';

export async function userAuth(
  username: string,
  password: string
): Promise<User | null> {
  const user = await UserService.userGet(username);
  if (!user || user.password != password) return null;
  return user;
}

export async function generateToken(user: User): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    jwt.sign({ username: user.username }, JWT_KEY, {}, (err, tkn) => {
      if (err || !tkn) reject(err);
      else resolve(tkn);
    });
  });
}

export async function jwtAuth(token: string): Promise<User | null> {
  return new Promise<User | null>((resolve) => {
    jwt.verify(token, JWT_KEY, {}, async (err, tkn) => {
      if (err || !tkn) return resolve(null);
      const { username } = tkn as { username: string };
      const user = await UserService.userGet(username);
      if (!user)
        resolve(null)
      else
        resolve(user)
    });
  });
}
