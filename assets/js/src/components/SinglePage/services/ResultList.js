import { Box, Image, Text }                                   from "grommet"
import { StatusCritical, StatusGood }                         from "grommet-icons"
import { Table, TableBody, TableCell, TableHeader, TableRow } from "grommet/es6"
import React                                                  from 'react'
import { getLocalStorageSubjectList }                         from "../../ExamContainer/services/localStorage"

function renderQuestion(answer, _, i) {
	return <Table>
		{i === 0
			? <TableHeader>
				<TableCell size={'medium'} scope='col'>{_.questionStatment}</TableCell>
				<TableCell size={'xxsmall'} scope='col'>
					{_.image
						? <Image width={100} src={`/${_.image}`} />
						: null}
				</TableCell>
				<TableCell size={'xxsmall'}></TableCell>
				<TableCell size={'xxsmall'} scope='col'></TableCell>
				<TableCell size='xxsmall' />
			</TableHeader>
			: null}
		<TableBody>
			<TableRow key={answer.id + answer.answer + i}>
				<TableCell size={'medium'} scope='row'></TableCell>
				<TableCell size={'small'} scope='row'>{answer.question}</TableCell>
				<TableCell size={'xsmall'} scope='row'>{answer.answer === "true"
					? "vrai"
					: answer.answer === "false"
						? "faux"
						: answer.answer}</TableCell>
				<TableCell size={'xsmall'} scope='row'><Text color={"green"}>{_.inputType === "checkbox"
					? answer.goodAnswer === "true"
						? "réponse"
						: null
					: answer.goodAnswer}</Text></TableCell>
				<TableCell size='xxsmall' scope='row'><Box>
					{_.inputType === "checkbox"
						? answer.goodAnswer === "true" && answer.answer === answer.goodAnswer
							? <StatusGood color={"green"} />
							: answer.goodAnswer === "true" && answer.answer !== answer.goodAnswer
								? <StatusCritical color={"red"} />
								: null
						: answer.answer === answer.goodAnswer
							? <StatusGood color={"green"} />
							: <StatusCritical color={"red"} />}
				</Box></TableCell>
			</TableRow>
		</TableBody>
	</Table>
}

export const ResultList = () => {
	const subject = getLocalStorageSubjectList()
	return <React.Fragment>
		<Table>
			<TableHeader>
				<TableCell size={'medium'} scope='col'>Question</TableCell>
				<TableCell size={'xxsmall'} scope='col'>Réponses possibles</TableCell>
				<TableCell size={'xxsmall'}>Saisie</TableCell>
				<TableCell size={'xxsmall'} scope='col'>Bonne réponse</TableCell>
				<TableCell size={'xxsmall'} scope='col'></TableCell>
			</TableHeader>
			<TableBody>
				<TableRow>
					<TableCell size={'medium'} scope='row'></TableCell>
					<TableCell size={'small'} scope='row'></TableCell>
					<TableCell size={'xsmall'} scope='row'></TableCell>
					<TableCell size={'xsmall'} scope='row'></TableCell>
					<TableCell size='xxsmall' scope='row'></TableCell>
				</TableRow>
			</TableBody>
		</Table>

		{subject.map((_) => {
			return _.answerList.map((answer, i) => renderQuestion(answer, _, i))
		})}
	</React.Fragment>
}
