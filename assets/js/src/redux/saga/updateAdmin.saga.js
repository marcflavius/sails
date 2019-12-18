import { put }                                 from "redux-saga/dist/redux-saga-effects-npm-proxy.esm"
import { Bus }                                 from "../../components/Utils/Bus"
import { updateAdminAction }                from "../actions/backend/admin/updateAdmin.action"
import { removeCurrentAdminInEditIdAction } from "../actions/backend/currentAdminId/removeCurrentAdminInEditEmail.action"

export function* updateAdminSaga(action) {
	try {
		yield put(updateAdminAction(action.data))
		Bus.emit('flash', {
			message: "Amin mise à jour",
			type: "success"
		})

		yield put(removeCurrentAdminInEditIdAction())

	} catch (e) {
		Bus.emit('flash', {
			message: e.message,
			type: "error"
		})
	}
}
