import * as redis from 'redis';

const client = redis.createClient({ url: process.env['REDIS_URL'] });

const MAX_INT = 4294967295;

export async function connect() {
  await client.connect();
  console.log('connection to redis established...')
}

export async function get(key: string) {
  return await client.get(key);
}

export async function set(key: string, value: string) {
  await client.set(key, value);
}

export async function push(key: string, value: string) {
  await client.lPush(key, value);
}

export async function pop(key: string) {
  await client.brPop(key, MAX_INT);
}

export async function setIfNotExist(key: string, value: string): Promise<boolean> {
  return await client.setNX(key, value);
}