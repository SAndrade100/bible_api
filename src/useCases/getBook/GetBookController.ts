import {Request, Response} from 'express'
import GetBookUseCase from './GetBookUseCase.ts'

class GetBookController {
    constructor(private getBookUseCase: GetBookUseCase) {}

    async handle(req: Request, res: Response) {
        try {
            const {book} = req.query

            if (typeof book !== 'string') {
                return res.status(400).json({ error: 'Invalid query parameters' });
            }

            const bookNumber = parseInt(book, 10);

            const result = await this.getBookUseCase.getBook(bookNumber)

            return res.json(result)

        } catch(err) {
            return res.status(400).json(err)
        }
    }
}

export default GetBookController