import { takeLatest }                  from "redux-saga/effects"
import { CREATE_ADMIN_SAGA_ACTION }    from "../actions/saga/createAdminSaga.action"
import { CREATE_ATTENDEE_SAGA_ACTION } from "../actions/saga/createAttendeeSaga.action"
import { DELETE_ADMIN_SAGA_ACTION }    from "../actions/saga/deleteAdminSaga.action"
import { DELETE_ATTENDEE_SAGA_ACTION } from "../actions/saga/deleteAttendeeSaga.action"
import { LOGIN_ADMIN_SAGA_ACTION }     from "../actions/saga/loginAdminSaga.actions"
import { LOGOUT_ADMIN_SAGA_ACTION }    from "../actions/saga/logoutAdminSaga.actions"
import { UPDATE_ADMIN_SAGA_ACTION }    from "../actions/saga/updateAdminSaga.action"
import { UPDATE_ATTENDEE_SAGA_ACTION } from "../actions/saga/updateAttendeeSaga.action"
import { createAdminSage }             from "./createAdmin.saga"
import { createAttendeeSage }          from "./createAttendee.sage"
import { deleteAdminSaga }             from "./deleteAdmin.saga"
import { deleteAttendeeSaga }          from "./deleteAttendee.saga"
import { loginAdminSaga }              from "./loginAdmin.saga"
import { logoutAdminSaga }             from "./logoutAdmin.saga"
import { updateAdminSaga }             from "./updateAdmin.saga"
import { updateAttendeeSaga }          from "./updateAttendee.saga"

export default function* rootSaga() {

	yield takeLatest(CREATE_ATTENDEE_SAGA_ACTION, createAttendeeSage)
	yield takeLatest(CREATE_ADMIN_SAGA_ACTION, createAdminSage)
	yield takeLatest(DELETE_ATTENDEE_SAGA_ACTION, deleteAttendeeSaga)
	yield takeLatest(DELETE_ADMIN_SAGA_ACTION, deleteAdminSaga)
	yield takeLatest(UPDATE_ATTENDEE_SAGA_ACTION, updateAttendeeSaga)
	yield takeLatest(UPDATE_ADMIN_SAGA_ACTION, updateAdminSaga)
	yield takeLatest(LOGIN_ADMIN_SAGA_ACTION, loginAdminSaga)
	yield takeLatest(LOGOUT_ADMIN_SAGA_ACTION, logoutAdminSaga)
}
