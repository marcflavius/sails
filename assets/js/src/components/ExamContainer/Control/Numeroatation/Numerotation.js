import React           from "react"
import { Box, Button } from "grommet"

const numerotation = (props) => {

	return <Box
		responsive flex justify='end'
		align="start"
	>
		<Button label={props.numberLabel.join(' / ')} />
	</Box>
}

export default numerotation
