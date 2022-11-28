import login from './login'
import register from './register'
import chpass from './chpass'
import logout from './logout'
import { Router } from 'express'

export const routes = Router();
routes.use(login);
routes.use(register);
routes.use(chpass);
routes.use(logout);