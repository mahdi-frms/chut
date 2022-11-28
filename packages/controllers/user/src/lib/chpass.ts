import * as Auth from '@chut/auth'
import { Status } from '@chut/types';
import { Router } from 'express'
import { jwtAuth } from '@chut/mid-auth'

const route = Router();
route.use(jwtAuth)

route.use(async (req, res) => {
    res.end('hi!');
})

export default route;