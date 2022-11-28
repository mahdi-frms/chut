import * as storage from '@chut/storage';
import { User } from '@chut/types';

function userKey(username: string) {
  return `user:${username}`
}

export async function userCreate(user: User): Promise<boolean> {
  const user_string = JSON.stringify(user);
  return await storage.setIfNotExist(userKey(user.username), user_string);
}

export async function userGet(username: string): Promise<User | null> {
  const user_string = await storage.get(userKey(username));
  if (!user_string) return null;
  return JSON.parse(user_string);
}

export async function userUpdate(user: User): Promise<void> {
  const user_string = JSON.stringify(user);
  await storage.set(userKey(user.username), user_string);
}
