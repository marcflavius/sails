import React, { Component }       from 'react'
import { connect }                from "react-redux"
import routes                     from "../../../../../Constants/routes"
import { setCurrentExamIdAction } from "../../../../../redux/actions/backend/currentExamId/setCurrentExamId.action"
import { deleteExamAction }       from "../../../../../redux/actions/backend/exam/deleteExam.action"
import ListPage                   from "../services/ListPage"

class ListExams extends Component {
	render() {
		return (<ListPage
			title={"Liste des Sujets"}
			emptyMsg={"Crée un projet"}
			deleteAction={deleteExamAction}
			showEndpoint={routes.back.ADMIN_SHOW_EXAM}
			entity={this.props.exams}
			setCurrentIdAction={setCurrentExamIdAction}/>)
	}
}

export default connect(({exams}) => ({exams}))(ListExams)
