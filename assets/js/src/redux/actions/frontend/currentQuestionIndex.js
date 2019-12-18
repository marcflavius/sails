import { DECREMENT_INDEX, INCREMENT_INDEX } from "../../reducer/currentQuestionIndex.reducer"

export const currentQuestionIndexDecrementAx = (currentIndex) => {
	return {
		type: DECREMENT_INDEX,
		currentIndex: currentIndex
	}
}

export const currentQuestionIndexIncrementAx = (currentIndex) => {
	return {
		type: INCREMENT_INDEX,
		currentIndex: currentIndex
	}
}
