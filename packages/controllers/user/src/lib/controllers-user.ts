import * as Auth from '@chut/auth'
import * as UserService from '@chut/user'
import { Status } from '@chut/types';
import { Router } from 'express'

export const routes = Router();

routes.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await Auth.userAuth(username, password);
  if (!user) {
    res.status(401).send({ status: Status.InvalidCredentials })
  }
  else {
    const token = await Auth.generateToken(user);
    res.cookie('jwt-token', token)
    res.status(200).send({ Status: Status.Sucess })
  }
})

routes.post('/register', async (req, res) => {
  const { username, password } = req.body;
  const user = { username, password };
  if (!await UserService.userCreate(user)) {
    res.status(401).send({ status: Status.UnavailableUsername })
  }
  else {
    const token = await Auth.generateToken(user);
    res.cookie('jwt-token', token)
    res.status(200).send({ Status: Status.Sucess })
  }
})
