import { Status } from '@chut/types';
import { Router } from 'express'
import { jwtAuth, reqUser } from '@chut/mid-auth'
import { userUpdate } from '@chut/user';

const route = Router();
route.use(jwtAuth)

route.use(async (req, res) => {
    const { oldPassword, newPassword } = req.body;
    const user = reqUser(req);
    if (user.password != oldPassword)
        res.status(401).send({ status: Status.InvalidCredentials });
    else {
        user.password = newPassword;
        await userUpdate(user);
        res.status(200).send({ status: Status.Sucess });
    }
})

export default route;