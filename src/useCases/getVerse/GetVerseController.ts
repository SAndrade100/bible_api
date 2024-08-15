import {Request, Response} from 'express'
import GetVerseUseCase from './GetVerseUseCase.ts'

class GetVerseController {
    constructor(private getVerseUseCase: GetVerseUseCase) {}

    async handle(req: Request, res: Response) {
        try {
            const {book, chapter, verse}: {book: number, chapter: number, verse: number[]} = req.body as {book: number, chapter: number, verse: number[]}
            const result = await this.getVerseUseCase.getVerse(book, chapter, verse)

            return res.json(result)

        } catch(err) {
            return res.status(400).json(err)
        }
    }
}

export default GetVerseController