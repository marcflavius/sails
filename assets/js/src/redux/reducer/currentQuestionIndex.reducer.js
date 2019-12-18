export const DECREMENT_INDEX = 'DECREMENT_INDEX'
export const INCREMENT_INDEX = 'INCREMENT_INDEX'

export const currentQuestionIndexReducer = (currentQuestionIndex = 0, action) => {
	switch (action.type) {
		case DECREMENT_INDEX:
			return action.currentIndex - 1
		case INCREMENT_INDEX:
			return action.currentIndex + 1
		default:
			return currentQuestionIndex
	}
}
