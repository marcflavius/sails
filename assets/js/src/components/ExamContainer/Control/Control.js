import React        from "react"
import { AppClock } from "../../UI/AppClock"
import { Box }      from "grommet/es6"
import Navigation   from "./Navigation/Navigation"
import Numerotation from "./Numeroatation/Numerotation"

function currentQuestion(props) {
	return props.currentQuestionIndex + 1
}

function totalQuestion(props) {
	return props.totalQuestionIndex + 1
}

const control = (props) => <Box style={{
	position: 'fixed',
	bottom:0
}}>
	<Box
		responsive
		flex
		direction='row'
		justify={'between'}
	>
		<Numerotation numberLabel={[currentQuestion(props), totalQuestion(props)]} />
		<AppClock />
		<Navigation prev={props.prev} next={props.next} />
	</Box>

</Box>

export default control
