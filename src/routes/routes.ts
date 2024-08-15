import { Application } from 'express'
import getVerseController from '../useCases/getVerse/index.ts'
import getBookController from '../useCases/getBook/index.ts'

const routes = (app: Application) => {
    app.get('/', (req, res) => {
        return res.json({ message: "Hello, world!" })
    })

    app.get('/verse', (req, res) => {
        return getVerseController.handle(req, res)
    })

    app.get('./book', (req, res) => {
        return getBookController.handle(req, res)
    })
}

export default routes
