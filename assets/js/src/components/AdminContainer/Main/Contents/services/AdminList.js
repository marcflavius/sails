import Button                                      from "@material-ui/core/Button"
import Input                                       from "@material-ui/core/Input"
import { TableBody, Text }                         from "grommet"
import { Edit }                                    from "grommet-icons"
import { Trash }                                   from "grommet-icons/es6"
import { Table, TableCell, TableHeader, TableRow } from "grommet/es6"
import React, { Component }                        from "react"
import { connect }                                 from "react-redux"
import { setCurrentAdminInEditIdAction }           from "../../../../../redux/actions/backend/currentAdminId/setCurrentAdminInEditId.action"
import { createAdminSagaAction }                   from "../../../../../redux/actions/saga/createAdminSaga.action"
import { deleteAdminSagaAction }                   from "../../../../../redux/actions/saga/deleteAdminSaga.action"
import { updateAdminSagaAction }                   from "../../../../../redux/actions/saga/updateAdminSaga.action"
import { AppButton }                               from "../../../../UI/AppButton"

class AdminList extends Component {
	state = {
		createFirstName: "",
		createLastName: "",
		createEmail: "",
		createRole: "",
		editFirstName: "",
		editLastName: "",
		editEmail: "",
		editRole: ""
	}

	deleteHandler(admin) {
		this.props.dispatch(deleteAdminSagaAction(admin.id))
	}

	onEditBtnClick = async (admin) => {
		await this.props.dispatch(setCurrentAdminInEditIdAction(admin.id))
		this.setState({
			editEmail: this.props.currentAdminInEdit.email,
			editFirstName: this.props.currentAdminInEdit.firstName,
			editLastName: this.props.currentAdminInEdit.lastName,
			editRole: this.props.currentAdminInEdit.role,
			createFirstName: "",
			createLastName: "",
			createEmail: ""
		})
	}

	createHandler = () => {
		this.props.dispatch(createAdminSagaAction({
			email: this.state.createEmail,
			firstName: this.state.createFirstName,
			lastName: this.state.createLastName,
			role: this.state.createRole
		}))

		this.setState({
			createFirstName: "",
			createLastName: "",
			createEmail: "",
			createRole: ""
		})
	}

	updateHandler = (admin) => {
		this.props.dispatch(updateAdminSagaAction({
			id: admin.id,
			firstName: this.state.editFirstName,
			lastName: this.state.editLastName,
			email: this.state.editEmail,
			role: this.state.editRole
		}))

		this.setState({
			editFirstName: "",
			editLastName: "",
			editEmail: "",
			editRole: ""
		})
	}

	inputChange = (e, key) => {
		return this.setState({[key]: e.target.value})
	}

	render() {
		return <Table>
			<TableHeader>
				<TableRow>
					<TableCell size={'small'}>id</TableCell>
					<TableCell size={'small'}>Nom</TableCell>
					<TableCell size={'small'} scope='col'>Prénom</TableCell>
					<TableCell size={'small'} scope='col'>Contact</TableCell>
					<TableCell size={'small'} scope='col'>Rôle</TableCell>
					<TableCell size={'small'} scope='col'>Supprimer</TableCell>
					<TableCell size={'small'} scope='col'>Editer</TableCell>
					<TableCell size='small' />
				</TableRow>
			</TableHeader>
			<TableBody>
				{/*rows*/}
				{this.props.admins.map((admin, i) => {
					return this.props.currentAdminInEditId === admin.id
						? this.renderUpdateForm("Mise à jour", this.updateHandler.bind(this, admin))
						: this.renderCurrentRow(admin, i, this.onEditBtnClick)
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
			<TableCell size={'large'} scope='row'>
				<Input
					value={this.state.createRole || ""}
					onChange={(e) => {this.inputChange(e, "createRole")}}
				/>
			</TableCell>
			<TableCell size={'small'} scope='row' />
			<TableCell size={'small'}>
				<AppButton onClick={() => actionHandler()} text={action} />
			</TableCell>
		</TableRow>
	}

	renderUpdateForm = (action, actionHandler) => {
		return this.props.currentAdminInEdit === undefined
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
				<TableCell size={'large'} scope='row'>
					<Input
						value={this.state.editRole}
						onChange={(e) => {this.inputChange(e, "editRole")}}
					/>
				</TableCell>
				<TableCell size={'small'} scope='row' />
				<TableCell size={'small'}>
					<AppButton onClick={() => actionHandler()} text={action} />
				</TableCell>
			</TableRow>
	}

	renderCurrentRow = (admin, i, actionHandler) => {
		return <TableRow key={admin + i}>
			<TableCell size={'small'} scope='row'>{admin.id}</TableCell>
			<TableCell size={'small'} scope='row'>{admin.firstName}</TableCell>
			<TableCell size={'small'} scope='row'>{admin.lastName}</TableCell>
			<TableCell size={'large'} scope='row'>{admin.email}</TableCell>
			<TableCell size={'small'} scope='row'>{admin.role}</TableCell>
			<TableCell size={'xsmall'} scope='row'>
				<Button onClick={() => this.deleteHandler(admin)}>
					<Trash />
				</Button>
			</TableCell>
			<TableCell
				onClick={() => actionHandler(admin)}
				size={'xsmall'} scope='row'>
				<Button>
					<Edit />
				</Button>
			</TableCell>
			<TableCell size={'small'} />
		</TableRow>
	}
}

export default connect(({admins, currentAdminInEditId}) => ({
	admins,
	currentAdminInEdit: admins.find((_) => {
		return _.id === currentAdminInEditId
	}),
	currentAdminInEditId
}))(AdminList)
