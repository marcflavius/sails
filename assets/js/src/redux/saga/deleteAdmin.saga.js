import { put }                  from "redux-saga/effects"
import { Bus }                  from "../../components/Utils/Bus"
import { deleteAdminAction } from "../actions/backend/admin/deleteAdmin.action"

export function* deleteAdminSaga(action) {
	const {id} = action
	try {
		if (!!!id) {throw new Error("Format incorrect")}
		yield put(deleteAdminAction(id))
		Bus.emit('flash', {
			message: "Admin supprimé",
			type: "success"
		})

	} catch (e) {
		Bus.emit('flash', {
			message: e.message,
			type: "error"
		})
	}
}
