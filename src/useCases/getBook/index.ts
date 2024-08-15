import GetBookUseCase from "./GetBookUseCase.ts"
import GetBookController from "./GetBookController.ts"

const getBookUseCase = new GetBookUseCase()
const getBookController = new GetBookController(getBookUseCase)

export default getBookController