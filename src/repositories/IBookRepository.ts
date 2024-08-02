import Book from "../types/Book.ts"

export default interface IBookRepository {
    getBook(id: number): Promise<Book> 
    getAllBooks(): Promise<Book[]>
}