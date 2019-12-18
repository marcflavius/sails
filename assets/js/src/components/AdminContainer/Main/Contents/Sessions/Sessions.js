import React, { Component }    from 'react'
import routes                  from "../../../../../Constants/routes"
import { createSessionAction } from "../../../../../redux/actions/backend/session/createSession.action"
import CreatePage              from "../services/CreatePage"

class CreateExam extends Component {
	render() {
		return (<CreatePage
			title={"Créer une session"}
			onSuccessRoute={routes.back.ADMIN_LIST_SESSIONS}
			dispatchAction={createSessionAction}
		/>)
	}
}
export default CreateExam
