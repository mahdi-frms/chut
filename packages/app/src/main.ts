import express from 'express'
import { routes as UserRoute } from '@chut/con-user'

const app = express()

app.use('/user', UserRoute)
app.get('/echo', (req, res) => {
    res.send('hello').end()
})

app.listen(3000);