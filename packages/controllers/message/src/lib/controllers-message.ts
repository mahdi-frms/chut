import { Router } from 'express'
import send from './send'
import receive from './receive'

export const routes = Router();
routes.use('/mes', send);
routes.use('/mes', receive);