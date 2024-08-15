import sequelize from '../../database/database.ts'

class GetBookUseCase {
    async getBook(book: number) {
        const response = []
        const val = await sequelize.models.Verse.findAll({
            where: {
                book: book
            }
        })
        console.log(val)
    }

}

export default GetBookUseCase
