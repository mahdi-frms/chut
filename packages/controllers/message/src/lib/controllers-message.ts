import { Router } from 'express'
import send from './send'

export const routes = Router();
routes.post('/send', send);