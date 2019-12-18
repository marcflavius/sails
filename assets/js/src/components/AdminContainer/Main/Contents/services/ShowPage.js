import { Box, Grid, Stack } from "grommet"
import React                from "react"
import { connect }          from "react-redux"
import { withRouter }       from "react-router"
import { Section }          from "../../../../UI/Section"

const ShowPage = (props) => {
	return <Section
		name={props.title}
	>
		<Grid
			columns={{
				"count": "fit",
				size: 'small'
			}}
			gap='large'
			alignContent='center'>
			<Box>
				{props.children}
				<Stack anchor="left" pad={'small'}>
					<Box direction='row' align='center'
					     size={'small'}
					     pad={{top: 'small'}}
					>
					</Box>
				</Stack>
			</Box>

		</Grid>
	</Section>
}

export default connect(({exams, sessions, currentExamId, currentSessionId}) => {
	return {
		exam: exams.find((_) => _.id === currentExamId),
		session: sessions.find((_) => _.id === currentSessionId)
	}

})(withRouter(ShowPage))
