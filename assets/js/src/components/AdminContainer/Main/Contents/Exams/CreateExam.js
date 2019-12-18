import React, { Component } from 'react'
import routes               from "../../../../../Constants/routes"
import { createExamAction } from "../../../../../redux/actions/backend/exam/createExam.action"
import CreatePage           from "../services/CreatePage"

class CreateExam extends Component {
	render() {
		return (<CreatePage
			title={"Créer un Sujet"}
			onSuccessRoute={routes.back.ADMIN_LIST_EXAMS}
			dispatchAction={createExamAction}
		/>)
	}
}
export default CreateExam
