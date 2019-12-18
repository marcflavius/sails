import { call, delay, put, select }                    from "redux-saga/effects"
import { removeLocalStorageAuth, setLocalStorageAuth } from "../../components/ExamContainer/services/localStorage"
import { Bus }                                         from "../../components/Utils/Bus"
import routes                                          from "../../Constants/routes"
import { logoutAdminAction }                           from "../actions/backend/auth/logoutAdmin.actions"
import { history }                                     from "../store"

export function* logoutAdminSaga(action) {
	try {
		yield    call(setLocalStorageAuth, {state: false})
		yield delay(1000)
		Bus.emit('flash', {
			message: "À bientôt",
			type: "success"
		})
		history.push(routes.back.ADMIN)
		yield put(logoutAdminAction())
	} catch (e) {
		Bus.emit('flash', {
			message: e.message,
			type: "error"
		})
	}
}
