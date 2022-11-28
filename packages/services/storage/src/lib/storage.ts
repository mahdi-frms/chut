import * as redis from 'redis';

function createClient() {
  return redis.createClient({ url: process.env['REDIS_URL'] });
}

const client = createClient();

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

export async function pop(key: string): Promise<string> {
  const client = createClient();
  await client.connect();
  const mes = (await client.brPop(key, MAX_INT))?.element || '';
  await client.disconnect();
  return mes;
}

export async function setIfNotExist(key: string, value: string): Promise<boolean> {
  return await client.setNX(key, value);
}