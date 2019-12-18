import produce                    from "immer"
import short                      from 'short-uuid'
import { ADD_ADMIN_ACTION }    from "../actions/backend/admin/addAdmin.action"
import { DELETE_ADMIN_ACTION } from "../actions/backend/admin/deleteAdmin.action"
import { UPDATE_ADMIN_ACTION } from "../actions/backend/admin/updateAdmin.action"
import initialState               from "../store/initialState"

export const adminsReducer = (state = initialState.admins, action) => {
	switch (action.type) {
	case ADD_ADMIN_ACTION:
		return [
			...state, {
				id: short.generate(),
				email: action.data.email,
				firstName: action.data.firstName,
				lastName: action.data.lastName,
				role: action.data.role,
			}
		]
	case DELETE_ADMIN_ACTION:
		return state.filter((el) => {
			return el.id !== action.id
		})

	case UPDATE_ADMIN_ACTION:
		return 	produce(state, admins => {
			const currentAdminIndex = admins.map(_ => _.id).indexOf(action.data.id)
			admins[currentAdminIndex] = {
				id:action.data.id,
				email: action.data.email,
				firstName: action.data.firstName,
				lastName: action.data.lastName,
				role: action.data.role,
			}
		})
	}
	return state
}

