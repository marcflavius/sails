
import { REMOVE_CURRENT_ADMIN_IN_EDIT_ID_ACTION } from "../actions/backend/currentAdminId/removeCurrentAdminInEditEmail.action"
import { SET_CURRENT_ADMIN_IN_EDIT_ID_ACTION }    from "../actions/backend/currentAdminId/setCurrentAdminInEditId.action"
import initialState                                  from "../store/initialState"

export const currentAdminInEditIdReducer = (state = initialState.currentAdminInEditId, action) => {
	switch (action.type) {
	case SET_CURRENT_ADMIN_IN_EDIT_ID_ACTION:
		return action.id || ""
	case REMOVE_CURRENT_ADMIN_IN_EDIT_ID_ACTION:
		return ""

	}
	return state
}
