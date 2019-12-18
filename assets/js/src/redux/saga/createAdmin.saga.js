import { put }               from "redux-saga/effects"
import { Bus }               from "../../components/Utils/Bus"
import { addAdminAction } from "../actions/backend/admin/addAdmin.action"

export function* createAdminSage(action) {
	const {data} = action

	try {
		if (!!!data.email || !!!data.firstName || !!!data.lastName || !!!data.role) {throw new Error("Format" +
		                                                                                             " incorrect")}

		yield put(addAdminAction(data))
		Bus.emit('flash', {
			message: "Admin ajouté",
			type: "success"
		})
	} catch (e) {
		Bus.emit('flash', {
			message: e.message,
			type: "error"
		})

	}
}
