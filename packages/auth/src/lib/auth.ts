import { service as UserService } from '@chut/user'
import { User } from '@chut/types'
import * as jwt from 'jsonwebtoken'

const JWT_KEY = 'my secret jwt key'
const JWT_ALG = 'RS256'

export async function userAuth(username: string, password: string): Promise<boolean> {
  const user = await UserService.userGet(username)
  if (!user)
    return false;
  return user.password == password;
}

export async function generateToken(user: User): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    jwt.sign(user, JWT_KEY, { algorithm: JWT_ALG }, (err, tkn) => {
      if (err || !tkn)
        reject(err)
      else
        resolve(tkn)
    })
  })
}