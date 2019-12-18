import { Image, Table }                                                           from "grommet"
import { Box, Heading, Stack, TableBody, TableCell, TableHeader, TableRow, Text } from "grommet/es6"
import React                                                                      from "react"
import { withRouter }                                                             from "react-router"
import initialState
                                                                                  from "../../../../../redux/store/initialState"
import PreviousBtn                                                                from "../../../../UI/PreviousBtn"

const Section = ({children, name}) => <Box
	tag='section'
	pad={{
		vertical: 'medium',
		horizontal: 'medium'
	}}
>
	<Stack anchor='left' pad='small'>
		<Box align='center' margin={{top: 'none'}}>
			<Heading
				level={2}
				margin={{top: 'small'}}
				align='center'
			>
				{name}
			</Heading>
		</Box>
		<PreviousBtn />
	</Stack>
	{children}
</Box>


const editQuestion = ({match}) => {
	var questions = initialState.questions[match.params.questionId];
	if (questions){
		var list_anwser = questions.answerList};

	return (<div style={{
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}}>
		<div>
			<Section>
				<h1>Questions : {questions.questionStatment}</h1>
				<ul>
					<li>ID : {questions.id}</li>
					<li>Type de réponse: {questions.inputType}</li>
					<li>Texte : {questions.text}</li>
					<li>Image : {questions.image}</li>
				</ul>
				<Box height="small" width="small">
					<Image
						fit="cover"
						src={`/public/${questions.image}`}
					/>
				</Box>
				<Box height="small" width="small">
					<Image
						fit="cover"
						src={`/filrouge-react/public/${questions.image}`}
					/>
				</Box>
				<Box height="small" width="small">
					<Image
						fit="cover"
						src="http://www.sudokeys.com/sites/all/themes/responsive_bartik/images/mail/numvert.png"
					/>
				</Box>
<Table>
					<TableHeader>
						<TableRow>
							<TableCell size={'small'}>id</TableCell>
							<TableCell size={'small'}>Réponses</TableCell>
							<TableCell size={'small'}>Bonne réponse</TableCell>
						</TableRow>
					</TableHeader>
					<TableBody>
					{list_anwser.map((list_anwser) => {
							return list_anwser
								? <TableRow key={list_anwser}>
										<TableCell size={'small'} scope='row'>{list_anwser.id}</TableCell>
									<TableCell size={'small'} scope='row'>{list_anwser.question}</TableCell>
									<TableCell size={'large'} scope='row'>{list_anwser.anwser}</TableCell>
									<TableCell size={'small'} />
								</TableRow>
								: <TableRow>
									<TableCell scope='row'><Text>
										Aucune conditat. Vous pouvez en
										créer en cliquant sur le
										bouton +
									</Text></TableCell>
								</TableRow>
						})}
					</TableBody>
				</Table>
			</Section>
		</div>
	</div>)
}

export default withRouter(editQuestion)
