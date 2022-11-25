import express from 'express'
import { connect as dbConnect } from '@chut/storage'
import { routes as UserRoute } from '@chut/con-user'

async function main() {

    await dbConnect()

    const app = express()

    app.use('/user', UserRoute)
    app.get('/echo', (req, res) => {
        res.send('hello').end()
    })

    app.listen(process.env.PORT || 3000);
}

main()