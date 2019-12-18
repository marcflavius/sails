import { put }                                 from "redux-saga/dist/redux-saga-effects-npm-proxy.esm"
import { Bus }                                 from "../../components/Utils/Bus"
import { updateAttendeeAction }                from "../actions/backend/attendee/updateAttendee.action"
import { removeCurrentAttendeeInEditIdAction } from "../actions/backend/currentAttendeeInEditEmail/removeCurrentAttendeeInEditId.action"

export function* updateAttendeeSaga(action) {
	try {
		yield put(updateAttendeeAction(action.data))
		Bus.emit('flash', {
			message: "Candidate mise à jour",
			type: "success"
		})

		yield put(removeCurrentAttendeeInEditIdAction())

	} catch (e) {
		Bus.emit('flash', {
			message: e.message,
			type: "error"
		})
	}
}
