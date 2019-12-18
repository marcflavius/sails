import React          from "react"
import { Box, Clock } from "grommet/es6"

export const AppClock = () => <Box
	responsive
	flex
	justify='end'
	align='start'
	margin={{bottom: 'xsmall'}}
	gap='xsmall'>
	{['forward'].map(run => (<Clock
		key={1}
		run={run}
		type='analog' />))}

</Box>
