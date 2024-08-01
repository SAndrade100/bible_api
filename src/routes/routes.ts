import { Application } from 'express'

const routes = (app: Application) => {
    app.get('/verse', (req, res) => {
        return res.json({ message: "Hello, world!" })
    })
}

export default routes