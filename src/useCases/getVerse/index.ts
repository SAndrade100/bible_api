import GetVerseUseCase from "./GetVerseUseCase.ts"
import GetVerseController from "./GetVerseController.ts"

const getVerseUseVase = new GetVerseUseCase()
const getVerseController = new GetVerseController(getVerseUseVase)

export default getVerseController