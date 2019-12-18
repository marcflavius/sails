import { isEmpty }                  from "lodash"
import { delay, put, select, call } from "redux-saga/effects"
import { setLocalStorageAuth }      from "../../components/ExamContainer/services/localStorage"
import { Bus }                      from "../../components/Utils/Bus"
import routes                       from "../../Constants/routes"
import { loginAdminAction }         from "../actions/backend/auth/loginAdmin.action"
import { history }                  from "../store"

export function* loginAdminSaga(action) {
	const {data} = action
	const {email, password} = data
	try {
		if (!!!email || !!!password) {throw new Error("Format incorrect")}

		const admin = yield select(({admins}) => admins.find((admin) => admin.email === email))

		if (!isEmpty(admin)) {
			yield    call(setLocalStorageAuth, {...admin,state:true})
			yield    call(history.push, routes.back.ADMIN)
			yield put(loginAdminAction({data: admin}))
			yield delay(1000)
			Bus.emit('flash', {
				message: `Bienvenue ${admin.firstName}`,
				type: "success"
			})
		} else {
			Bus.emit('flash', {
				message: "Utilisateur inconnu",
				type: "error"
			})
		}

	} catch (e) {
		Bus.emit('flash', {
			message: e.message,
			type: "error"
		})
	}
}
