import * as Auth from '@chut/auth'
import { Status, JwtCookie } from '@chut/types';
import { Router } from 'express'

const route = Router();

route.use(async (req, res) => {
    const { username, password } = req.body;
    const user = await Auth.userAuth(username, password);
    if (!user) {
        res.status(401).send({ status: Status.InvalidCredentials })
    }
    else {
        const token = await Auth.generateToken(user);
        res.cookie(JwtCookie, token)
        res.status(200).send({ status: Status.Sucess })
    }
})

export default route;