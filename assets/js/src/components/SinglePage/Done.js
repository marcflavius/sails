import { Box, Heading, Text }         from "grommet"
import React, { Component }           from 'react'
import { getLocalStorageSubjectList } from "../ExamContainer/services/localStorage"
import { Section }                    from "../UI/Section"
import { ResultList }                 from "./services/ResultList"

class Done extends Component {
	state = {
		note: 0
	}

	componentDidMount() {
		const subject = getLocalStorageSubjectList()
		const note = subject.map((_) => {
			return _.answerList.every((answer, i) => _.inputType === "text"
				? answer.answer === answer.goodAnswer
					? true
					: false
				: _.inputType === "checkbox"
					? answer.goodAnswer === answer.answer ||
					  (answer.goodAnswer === "false" && answer.answer === "")
						? true
						: false
					: null)
		})

		this.setState({note: note.filter((_) => _ !== false).length})
	}

	renderNotation() {
		return <Box>
			<Box flex justify={"end"} direction={"row"} pad={{bottom: "medium"}}>
				<Text style={{fontSize: 40}} weight={"bold"}>{this.state.note}/10</Text>
			</Box>
		</Box>
	}

	render() {
		return <Box pad={"small"} background={"brand"}>
			<Box flex align={"center"} justify={"center"}>

				<Heading
					level={2}
					margin={{top: 'small'}}
					align='center'
				>
					Résultat du test
				</Heading>

				<Box background={"light"} round={"small"}>
					<Section hideBackBtn={true}>
						{this.renderNotation()}
						<ResultList showAddItemForm={true} />
					</Section>
				</Box>
			</Box>
		</Box>
	}
}

export default Done
