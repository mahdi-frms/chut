import { Router } from 'express'
import { jwtAuth, reqUser } from '@chut/mid-auth'
import * as MessageService from '@chut/message'

export const route = Router()

route.get('/receive',
    jwtAuth,
    async (req, res) => {
        const headers = {
            'Content-Type': 'text/event-stream',
            'Connection': 'keep-alive',
            'Cache-Control': 'no-cache'
        };
        res.writeHead(200, headers);

        let is_recv = true;
        req.on('close', () => is_recv = false);

        const user = reqUser(req);
        while (is_recv) {
            const mes = await MessageService.receiveMessage(user.username);
            if (is_recv)
                res.write(`${mes}\n`);
        }
    })

export default route;