import login from './login'
import register from './register'
import chpass from './chpass'
import logout from './logout'
import { Router } from 'express'

export const routes = Router();
routes.post('/login', login);
routes.post('/register', register);
routes.post('/chpass', chpass);
routes.post('/logout', logout);