export default class Book {
    public readonly id!: number
    public readonly idx!: number
    public book!: string
    public alt!: string
    public abbr!: string

    constructor(id: number, idx: number, book: string, alt: string, abbr: string) {
        this.id = id
        this.idx = idx
        this.book = book
        this.alt = alt
        this.abbr = abbr
    }
}