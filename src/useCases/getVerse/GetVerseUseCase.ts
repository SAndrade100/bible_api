import sequelize from '../../database/database.ts'

class GetVerseUseCase {
    async getVerse(book: number, chapter: number, verse: number[]) {
        const response = []
        for(let value of verse) {
            const val = await sequelize.models.Verse.findOne({
                where: {
                    book: book,
                    chapter: chapter,
                    verse: value
                },
                raw: true
            })
            response.push(val || {})
        }
        return response
    }
}

export default GetVerseUseCase
