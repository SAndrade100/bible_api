import { Application } from 'express'
import { GetVerseController } from 

const routes = (app: Application) => {
    app.get('/verse', (req, res) => {
        return res.json({ message: "Hello, world!" })
    })
}

export default routes