import * as Auth from '@chut/auth'
import * as UserService from '@chut/user'
import { Status } from '@chut/types';
import { Router } from 'express'

const route = Router();

route.use(async (req, res) => {
    const { username, password } = req.body;
    const user = { username, password };
    if (!await UserService.userCreate(user)) {
        res.status(401).send({ status: Status.UnavailableUsername })
    }
    else {
        const token = await Auth.generateToken(user);
        res.cookie('jwt-token', token)
        res.status(200).send({ status: Status.Sucess })
    }
})

export default route;