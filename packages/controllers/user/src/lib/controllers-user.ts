import * as Auth from '@chut/auth'
import { Router } from 'express'

export const routes = Router();

routes.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await Auth.userAuth(username, password);
  if (!user) {
    res.status(401).send('invalid credentials')
  }
  else {
    const token = await Auth.generateToken(user);
    res.cookie('jwt-token', token)
    res.status(200).end()
  }
})
