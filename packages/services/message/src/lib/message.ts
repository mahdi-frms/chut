import * as storage from '@chut/storage';

function channelKey(username: string) {
  return `ch:${username}`
}

export async function sendMessage(user: string, mes: string) {
  await storage.push(channelKey(user), mes)
}

export async function receiveMessage(user: string) {
  return await storage.pop(channelKey(user))
}