import { Box }   from "grommet"
import PropTypes from 'prop-types'
import React     from "react"

export function MessageBox({msg}) {
	return <Box
		style={{
			paddingLeft: 300,
			fontSize: 22,
			paddingRight: 300,
		}}
	>
		<Box
			style={{
			borderRadius:5
			}}
			border={{
				color: 'brand',
				round:'small'
			}}
			flex
			pad={'small'}
			margin={"small"}
			align={"center"}
			size={'small'}
		>
			{msg}
		</Box>
	</Box>
}

MessageBox.propTypes = {
	msg: PropTypes.string.isRequired
}

// MessageBox.defaultProps = {}


