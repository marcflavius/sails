import Button                                      from "@material-ui/core/Button"
import Input                                       from "@material-ui/core/Input"
import { TableBody, Text }                         from "grommet"
import { Edit }                                    from "grommet-icons"
import { Trash }                                   from "grommet-icons/es6"
import { Table, TableCell, TableHeader, TableRow } from "grommet/es6"
import PropTypes                                   from 'prop-types'
import React, { Component }                        from "react"
import { connect }                                 from "react-redux"
import { setCurrentAttendeeInEditIdAction }        from "../../../../../redux/actions/backend/currentAttendeeInEditEmail/setCurrentAttendeeInEditId.action"
import { createAttendeeSagaAction }                from "../../../../../redux/actions/saga/createAttendeeSaga.action"
import { deleteAttendeeSagaAction }                from "../../../../../redux/actions/saga/deleteAttendeeSaga.action"
import { updateAttendeeSagaAction }                from "../../../../../redux/actions/saga/updateAttendeeSaga.action"
import { AppButton }                               from "../../../../UI/AppButton"

class AttendeeList extends Component {
	state = {
		editEmail: "",
		editFirstName: "",
		editLastName: "",
		createFirstName: "",
		createLastName: "",
		createEmail: ""
	}

	deleteHandler(attendee) {
		this.props.dispatch(deleteAttendeeSagaAction(attendee.id))
	}

	onEditBtnClick = async (attendee) => {
		await this.props.dispatch(setCurrentAttendeeInEditIdAction(attendee.id))
		this.setState({
			editEmail: this.props.currentAttendeeInEdit.email,
			editFirstName: this.props.currentAttendeeInEdit.firstName,
			editLastName: this.props.currentAttendeeInEdit.lastName,
			createFirstName: "",
			createLastName: "",
			createEmail: ""
		})
	}

	createHandler = () => {
		this.props.dispatch(createAttendeeSagaAction({
			email: this.state.createEmail,
			firstName: this.state.createFirstName,
			lastName: this.state.createLastName
		}))

		this.setState({
			createFirstName: "",
			createLastName: "",
			createEmail: ""
		})
	}

	updateHandler = (attendee) => {
		this.props.dispatch(updateAttendeeSagaAction({
			id: attendee.id,
			firstName: this.state.editFirstName,
			lastName: this.state.editLastName,
			email: this.state.editEmail
		}))

		this.setState({
			editFirstName: "",
			editLastName: "",
			editEmail: ""
		})
	}

	inputChange = (e, key) => {
		return this.setState({[key]: e.target.value})
	}

	render() {
		return <Table>
			<TableHeader>
				<TableRow>
					<TableCell size={'small'} scope='col'>id</TableCell>
					<TableCell size={'small'}>Nom</TableCell>
					<TableCell size={'small'} scope='col'>Prénom</TableCell>
					<TableCell size={'small'} scope='col'>Contact</TableCell>
					<TableCell size={'small'} scope='col'>Résultat</TableCell>
					<TableCell size={'small'} scope='col'>Date</TableCell>
					<TableCell size={'small'} scope='col'>Supprimer</TableCell>
					<TableCell size={'small'} scope='col'>Editer</TableCell>
					<TableCell size='small' />
				</TableRow>
			</TableHeader>
			<TableBody>
				{/*rows*/}
				{this.props.attendees.map((attendee, i) => {
					return this.props.currentAttendeeInEditId === attendee.id
						? this.renderUpdateForm("Mise à jour", this.updateHandler.bind(this,attendee))
						: this.renderCurrentRow(attendee, i, this.onEditBtnClick)
				})}
				{/*add*/}
				{!this.props.showAddItemForm
					? null
					: this.renderCreateForm("Ajouter", this.createHandler)}
			</TableBody>
		</Table>
	}

	renderCreateForm = (action, actionHandler) => {
		return <TableRow>
			<TableCell size={'small'} scope='row' />
			<TableCell size={'small'} scope='row'>
				<Input
					value={this.state.createFirstName || ""}
					onChange={(e) => {this.inputChange(e, "createFirstName")}}
				/>
			</TableCell>
			<TableCell size={'small'} scope='row'>
				<Input
					value={this.state.createLastName || ""}
					onChange={(e) => {this.inputChange(e, "createLastName")}}
				/>
			</TableCell>
			<TableCell size={'large'} scope='row'>
				<Input
					value={this.state.createEmail || ""}
					onChange={(e) => {this.inputChange(e, "createEmail")}}
				/>
			</TableCell>
			<TableCell size={'small'} scope='row' />
			<TableCell size={'small'}>
				<AppButton onClick={() => actionHandler()} text={action} />
			</TableCell>
		</TableRow>
	}

	renderUpdateForm = (action, actionHandler) => {
		return this.props.currentAttendeeInEdit === undefined
			? <Text>Loading...</Text>
			: <TableRow>
				<TableCell size={'small'} scope='row' />
				<TableCell size={'small'} scope='row'>
					<Input
						value={this.state.editFirstName}
						onChange={(e) => {this.inputChange(e, "editFirstName")}}
					/>
				</TableCell>
				<TableCell size={'small'} scope='row'>
					<Input
						value={this.state.editLastName}
						onChange={(e) => {this.inputChange(e, "editLastName")}}
					/>
				</TableCell>
				<TableCell size={'large'} scope='row'>
					<Input
						value={this.state.editEmail}
						onChange={(e) => {this.inputChange(e, "editEmail")}}
					/>
				</TableCell>
				<TableCell size={'small'} scope='row' />
				<TableCell size={'small'}>
					<AppButton onClick={() => actionHandler()} text={action} />
				</TableCell>
			</TableRow>
	}

	renderCurrentRow = (attendee, i, actionHandler) => {
		return <TableRow key={attendee + i}>
			<TableCell size={'small'} scope='row'>{attendee.id}</TableCell>
			<TableCell size={'small'} scope='row'>{attendee.firstName}</TableCell>
			<TableCell size={'small'} scope='row'>{attendee.lastName}</TableCell>
			<TableCell size={'large'} scope='row'>{attendee.email}</TableCell>
			<TableCell size={'small'} scope='row'>{attendee.result}</TableCell>
			<TableCell size={'small'} scope='row'>{attendee.date}</TableCell>
			<TableCell size={'xsmall'} scope='row'>
				<Button onClick={() => this.deleteHandler(attendee)}>
					<Trash />
				</Button>
			</TableCell>
			<TableCell
				onClick={() => actionHandler(attendee)}
				size={'xsmall'} scope='row'>
				<Button>
					<Edit />
				</Button>
			</TableCell>
			<TableCell size={'small'} />
		</TableRow>
	}
}

AttendeeList.propTypes = {
	showAddItemForm: PropTypes.bool
}

export default connect(({attendees, currentAttendeeInEditId, currentSessionId}) => ({
	attendees: attendees.filter((_) => {
		return _.sessionId !== currentSessionId
	}),
	currentAttendeeInEdit: attendees.find((_) => {
		return _.id === currentAttendeeInEditId
	}),
	currentAttendeeInEditId
}))(AttendeeList)
