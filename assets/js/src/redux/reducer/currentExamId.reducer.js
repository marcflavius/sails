import { SET_CURRENT_EXAM_ID_ACTION } from "../actions/backend/currentExamId/setCurrentExamId.action"
import initialState                   from "../store/initialState"

export const currentExamIdReducer = (state = initialState.currentExamId, action) => {
	switch (action.type) {
	case SET_CURRENT_EXAM_ID_ACTION:
		return action.id
	}
	return state
}

