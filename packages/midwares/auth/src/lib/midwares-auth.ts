import { Router } from 'express'
import { Status } from '@chut/types'
import * as Auth from '@chut/auth'

export const jwtAuth = Router()

jwtAuth.use(async (req, res, next) => {
  const tkn = req.cookies['jwt-token'];
  if (!tkn)
    res.status(401).send({ status: Status.TokenNotProvided });
  else {
    const jwtAuthResult = await Auth.jwtAuth(tkn);
    if (!jwtAuthResult)
      res.status(401).send({ status: Status.InvalidToken });
    else
      next()
  }
})
