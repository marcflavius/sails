import Button                                                             from "@material-ui/core/Button"
import { Text, TextArea }                                                 from "grommet"
import { Edit, StatusCritical, StatusGood, Trash }                        from "grommet-icons"
import { Box, Image, Table, TableBody, TableCell, TableHeader, TableRow } from "grommet/es6"
import React, { Component }                                               from 'react'
import { createAttendeeSagaAction }                                       from "../../../../../../redux/actions/saga/createAttendeeSaga.action"
import { getLocalStorageSubjectList }                                     from "../../../../../ExamContainer/services/localStorage"
import { AppButton }                                                      from "../../../../../UI/AppButton"
import { ListLayout }                                                     from "../ListLayout"
import { ExamCreateForm }                                                 from "./ExamCreateForm"

export class ExamQuestionsList extends Component {

	state = {
		inputType: "",
		image: "",
		text: "",
		questionStatment: "",
		answerList: ""
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

	render() {
		return <Box>
			<ExamCreateForm action={"Ajouter"} actionHandler={this.createHandler} />
			<ListLayout title={'Exam'}>
				{this.renderTableHeader()}
				{this.renderList()}
			</ListLayout>
		</Box>
	}

	renderList = () => {
		const subject = getLocalStorageSubjectList()
		return subject.map((_) => {
			return _.answerList.map((answer, i) => this.renderQuestion(answer, _, i))
		})
	}

	renderTableHeader = () => {
		return <Table>
			<TableHeader>
				<TableCell size={'small'}>Question</TableCell>
				<TableCell size={'small'}>Image</TableCell>
				<TableCell size={'small'}>Catégorie</TableCell>
				<TableCell size={'small'}>Bonne réponse</TableCell>
				<TableCell size={'small'}>Éditer</TableCell>
				<TableCell size={'small'}>Supprimer</TableCell>
			</TableHeader>
			<TableBody>
				<TableRow>
					<TableCell size={'small'}></TableCell>
					<TableCell size={'small'}></TableCell>
					<TableCell size={'small'}></TableCell>
					<TableCell size={'small'}></TableCell>
					<TableCell size={'small'}></TableCell>
					<TableCell size={'small'}></TableCell>
				</TableRow>
			</TableBody>
		</Table>

	}

	renderQuestion = (answer, _, i) => {
		return <Table>
			{i === 0
				? <TableHeader>
					<TableCell size={'small'}>{_.questionStatment}</TableCell>
					<TableCell size={'small'}>{_.image
						? <Image width={100} src={`/${_.image}`} />
						: null}</TableCell>

					<TableCell size={'small'}></TableCell>
					<TableCell size={'small'}></TableCell>
					<TableCell size={'small'}></TableCell>
					<TableCell size={'small'}></TableCell>
				</TableHeader>
				: null}
			<TableBody>
				<TableRow key={answer.id + answer.answer + i}>

					<TableCell size={'small'}>{answer.question}</TableCell>
					<TableCell size={'small'}>{answer.image}</TableCell>
					<TableCell size={'small'}>{_.groupTitle}</TableCell>

					<TableCell size={'small'}><Text color={"green"}>{_.inputType === "checkbox"
						? answer.goodAnswer === "true"
							? "réponse"
							: null
						: answer.goodAnswer}
					</Text>					</TableCell>

					<TableCell><Button><Edit /></Button></TableCell>


					<TableCell><Button><Trash /></Button></TableCell>

				</TableRow>
			</TableBody>
		</Table>
	}

}
