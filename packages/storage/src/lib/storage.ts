import * as redis from 'redis'

const client = redis.createClient();

async function connect() {
  await client.connect();
}

async function get(key: string) {
  return await client.get(key)
}

async function set(key: string, value: string) {
  await client.set(key, value)
}

async function setIfNotExist(key: string, value: string): Promise<boolean> {
  return await client.setNX(key, value)
}

export {
  connect,
  get, set, setIfNotExist as setIfNotExist
}