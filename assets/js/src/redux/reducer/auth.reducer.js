import { LOGIN_ADMIN_ACTION }  from "../actions/backend/auth/loginAdmin.action"
import { LOGOUT_ADMIN_ACTION } from "../actions/backend/auth/logoutAdmin.actions"
import initialState            from "../store/initialState"

export const authReducer = (state = initialState.auth, action) => {
	switch (action.type) {
	case LOGIN_ADMIN_ACTION:
		return {...action.data}
	case LOGOUT_ADMIN_ACTION:
		return {}
	}
	return state
}
