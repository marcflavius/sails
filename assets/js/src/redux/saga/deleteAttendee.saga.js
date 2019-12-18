import { put }                  from "redux-saga/effects"
import { Bus }                  from "../../components/Utils/Bus"
import { deleteAttendeeAction } from "../actions/backend/attendee/deleteAttendee.action"

export function* deleteAttendeeSaga(action) {
	const {id} = action
	try {
		if (!!!id) {throw new Error("Format incorrect")}

		yield put(deleteAttendeeAction(id))
		Bus.emit('flash', {
			message: "Candidate supprimé",
			type: "success"
		})

	} catch (e) {
		Bus.emit('flash', {
			message: e.message,
			type: "error"
		})
	}
}
