import { REMOVE_CURRENT_ATTENDEE_IN_EDIT_ID_ACTION } from "../actions/backend/currentAttendeeInEditEmail/removeCurrentAttendeeInEditId.action"
import { SET_CURRENT_ATTENDEE_IN_EDIT_ID_ACTION }    from "../actions/backend/currentAttendeeInEditEmail/setCurrentAttendeeInEditId.action"
import initialState                                  from "../store/initialState"

export const currentAttendeeInEditIdReducer = (state = initialState.currentAttendeeInEditId, action) => {
	switch (action.type) {
	case SET_CURRENT_ATTENDEE_IN_EDIT_ID_ACTION:
		return action.id || ""
	case REMOVE_CURRENT_ATTENDEE_IN_EDIT_ID_ACTION:
		return ""

	}
	return state
}

