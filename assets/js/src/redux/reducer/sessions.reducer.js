import { CREATE_SESSION_ACTION } from "../actions/backend/session/createSession.action"
import { DELETE_SESSION_ACTION } from "../actions/backend/session/deleteSession.action"
import initialState              from "../store/initialState"

let i = 1

export const sessionsReducer = (state = initialState.sessions, action) => {
	switch (action.type) {
	case CREATE_SESSION_ACTION:
		return [
			...state, {
				id: i++,
				title: action.title
			}
		]
	case DELETE_SESSION_ACTION:
		return state.filter((el) => {
			return el.id !== action.id
		})

	}
	return state
}

