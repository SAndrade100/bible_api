import {Request, Response} from 'express'
import GetVerseUseCase from './GetVerseUseCase.ts'

class GetVerseController {
    constructor(private getVerseUseCase: GetVerseUseCase) {}

    async handle(req: Request, res: Response) {
        try {
            const {book, chapter, verse} = req.query

            if (typeof book !== 'string' || typeof chapter !== 'string' || typeof verse !== 'string') {
                return res.status(400).json({ error: 'Invalid query parameters' });
            }

            const bookNumber = parseInt(book, 10);
            const chapterNumber = parseInt(chapter, 10);
            const verseNumbers = verse.split(',').map(v => parseInt(v, 10));

            const result = await this.getVerseUseCase.getVerse(bookNumber, chapterNumber, verseNumbers)

            return res.json(result)

        } catch(err) {
            return res.status(400).json(err)
        }
    }
}

export default GetVerseController

// const useCase = new GetVerseUseCase()
// const controll = new GetVerseController(useCase)

// const mockRequest = {
//     body: {
//         book: 1,
//         chapter: 1,
//         verse: [1]
//     }
// } as Request;

// // Mock para o objeto Response
// const mockResponse = {
//     json: (data: any) => console.log('Response JSON:', data),
//     status: (code: number) => {
//         console.log('Response Status Code:', code);
//         return mockResponse; // Retorna o próprio mock para encadear chamadas
//     }
// } as unknown as Response;

// // Chama o método handle com os mocks
// controll.handle(mockRequest, mockResponse).then(() => {
//     console.log('Handle method executed');
// }).catch(err => {
//     console.error('Error:', err);
// });