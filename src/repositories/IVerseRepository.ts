import Verse from "../types/Verse.ts"

export default interface IVerseRepository {
    getVerses(idBook: number, chapter: number, verses: number[]): Promise<Verse[]>
}