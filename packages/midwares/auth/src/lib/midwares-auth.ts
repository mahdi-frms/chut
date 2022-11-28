import { Request, Router } from 'express'
import { Status, User } from '@chut/types'
import * as Auth from '@chut/auth'

export const jwtAuth = Router()

export function reqUser(req: Request): User {
  return ((req as unknown) as { user: User }).user
}

jwtAuth.use(async (req, res, next) => {
  const tkn = req.cookies['jwt-token'];
  if (!tkn)
    res.status(401).send({ status: Status.TokenNotProvided });
  else {
    const jwtAuthResult = await Auth.jwtAuth(tkn);
    if (!jwtAuthResult)
      res.status(401).send({ status: Status.InvalidToken });
    else {
      ((req as unknown) as { user: User }).user = jwtAuthResult;
      next()
    }
  }
})
