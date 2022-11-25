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
