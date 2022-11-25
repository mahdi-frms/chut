import login from './login'
import register from './register'
import { Router } from 'express'

export const routes = Router();
routes.post('/login', login);
routes.post('/register', register);