import React                             from "react"
import { Box, Button }                   from "grommet"
import { FaStepBackward, FaStepForward } from 'react-icons/fa'
import { connect }                       from "react-redux"

const navigation = (props) => <Box
	responsive
	flex
	justify={'end'}
	direction={"row"}
	gap="small">
	<Button icon={<FaStepBackward
		disabled={true}
		size={50} />} onClick={() => {
		props.prev()
	}} />
	<Button
		// disabled={!isLastQuestion(props)}
		icon={<FaStepForward size={50} />} onClick={() => {
		props.next()
	}} primary />
</Box>

const mapStateToProps = (state) => {
	return {
		examState: state.examState
	}
}

export default connect(mapStateToProps)(navigation)
