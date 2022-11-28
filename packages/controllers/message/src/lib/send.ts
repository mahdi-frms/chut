import { Router } from 'express'
import { Status } from '@chut/types'
import * as UserService from '@chut/user'
import * as MessageService from '@chut/message'
import { jwtAuth } from '@chut/mid-auth'
import { vaildateUsername, vaildateText } from '@chut/mid-validate'

export const route = Router()

route.post('/send',
    jwtAuth,
    vaildateUsername,
    vaildateText,
    async (req, res) => {
        const { username, text } = req.body;
        if (!await UserService.userGet(username))
            res.status(400).send({ status: Status.ReceiverIDInvalid })
        else {
            await MessageService.sendMessage(username, text);
            res.status(200).send({ status: Status.Success });
        }
    })

export default route;