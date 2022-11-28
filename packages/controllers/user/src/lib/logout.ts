import { jwtAuth } from '@chut/mid-auth';
import { Status, JWT_COOKIE } from '@chut/types';
import { Router } from 'express'

const route = Router();

route.post('/logout',
    jwtAuth,
    async (req, res) => {
        res.clearCookie(JWT_COOKIE);
        res.status(200).send({ status: Status.Success });
    })

export default route;