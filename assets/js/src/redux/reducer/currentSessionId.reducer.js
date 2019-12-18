import { SET_CURRENT_SESSION_ID_ACTION } from "../actions/backend/currentSessionId/setCurrentSessionId.action"

export const currentSessionIdReducer = (state = {}, action) => {
	switch (action.type) {
	case SET_CURRENT_SESSION_ID_ACTION:
		return action.id
	}
	return state
}

