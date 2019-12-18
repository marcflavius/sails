import produce                    from "immer"
import short                      from 'short-uuid'
import { ADD_ATTENDEE_ACTION }    from "../actions/backend/attendee/addAttendee.action"
import { DELETE_ATTENDEE_ACTION } from "../actions/backend/attendee/deleteAttendee.action"
import { UPDATE_ATTENDEE_ACTION } from "../actions/backend/attendee/updateAttendee.action"
import initialState               from "../store/initialState"

export const attendeesReducer = (state = initialState.attendees, action) => {
	switch (action.type) {
	case ADD_ATTENDEE_ACTION:
		return [
			...state, {
				id: short.generate(),
				email: action.data.email,
				firstName: action.data.firstName,
				lastName: action.data.lastName,
				date: "05/25/2019",
				result: -1
			}
		]
	case DELETE_ATTENDEE_ACTION:
		return state.filter((el) => {
			return el.id !== action.id
		})

	case UPDATE_ATTENDEE_ACTION:
		return 	produce(state, attendees => {
			const currentAttendeeIndex = attendees.map(_ => _.id).indexOf(action.data.id)
			attendees[currentAttendeeIndex] = {
				id:action.data.id,
				email: action.data.email,
				firstName: action.data.firstName,
				lastName: action.data.lastName,
				date: "05/25/2019",
				result: -1
			}
		})
	}
	return state
}

