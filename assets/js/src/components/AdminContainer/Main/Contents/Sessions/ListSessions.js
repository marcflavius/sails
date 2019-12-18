import React, { Component }          from 'react'
import { connect }                   from "react-redux"
import routes                        from "../../../../../Constants/routes"
import { setCurrentSessionIdAction } from "../../../../../redux/actions/backend/currentSessionId/setCurrentSessionId.action"
import { deleteSessionAction }       from "../../../../../redux/actions/backend/session/deleteSession.action"
import ListPage                      from "../services/ListPage"

class ListSessions extends Component {

	render() {
		return (<ListPage
			title={"Liste des Sessions"}
			emptyMsg={"Crée une session"}
			deleteAction={deleteSessionAction}
			showEndpoint={routes.back.ADMIN_SHOW_SESSION}
			entity={this.props.sessions}
			setCurrentIdAction={setCurrentSessionIdAction} />)
	}
}

export default connect(({sessions}) => ({sessions}))(ListSessions)
