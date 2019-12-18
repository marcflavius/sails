import { connectRouter }                  from "connected-react-router"
import { combineReducers }                from "redux"
import { attendeesReducer }               from "./attendees.reducer"
import { authReducer }                    from "./auth.reducer"
import { currentAttendeeInEditIdReducer } from "./currentAttendeeInEditId.reducer"
import { currentAdminInEditIdReducer }    from "./currentAdminInEditId.reducer"
import { currentExamIdReducer }           from "./currentExamId.reducer"
import { currentQuestionIndexReducer }    from "./currentQuestionIndex.reducer"
import { currentSessionIdReducer }        from "./currentSessionId.reducer"
import { examsReducer }                   from "./exams.reducer"
import { sessionsReducer }                from "./sessions.reducer"
import { adminsReducer }                  from "./admins.reducer"

export const createRootReducer = (history) => combineReducers({
	router: connectRouter(history),
	currentQuestionIndex: currentQuestionIndexReducer,
	exams: examsReducer,
	sessions: sessionsReducer,
	currentExamId: currentExamIdReducer,
	attendees: attendeesReducer,
	currentSessionId: currentSessionIdReducer,
	currentAttendeeInEditId: currentAttendeeInEditIdReducer,
	currentAdminInEditId: currentAdminInEditIdReducer,
	admins: adminsReducer,
	auth: authReducer
})


