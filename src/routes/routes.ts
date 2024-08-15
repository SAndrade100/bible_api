import { Application } from 'express'
import getVerseController from '../useCases/getVerse/index.ts'

const routes = (app: Application) => {
    app.get('/', (req, res) => {
        return res.json({ message: "Hello, world!" })
    })

    app.get('/verse', (req, res) => {
        return getVerseController.handle(req, res)
    })
}

export default routes
