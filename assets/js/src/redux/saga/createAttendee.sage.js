import { put }               from "redux-saga/effects"
import { Bus }               from "../../components/Utils/Bus"
import { addAttendeeAction } from "../actions/backend/attendee/addAttendee.action"

export function* createAttendeeSage(action) {
	const {data} = action

	try {
		if (!!!data.email || !!!data.firstName || !!!data.lastName) {throw new Error("Format incorrect")}

		yield put(addAttendeeAction(data))
		Bus.emit('flash', {
			message: "Candidate ajouté",
			type: "success"
		})
	} catch (e) {
		Bus.emit('flash', {
			message: e.message,
			type: "error"
		})

	}
}
