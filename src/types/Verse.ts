export class Verse {
    public readonly book!: number
    public readonly chapter!: number
    public readonly verse!: number
    public readonly text!: string 

    constructor(book: number, chapter: number, verse: number, text: string) {
        this.book = book 
        this.chapter = chapter 
        this.verse = verse 
        this.text = text
    }
}