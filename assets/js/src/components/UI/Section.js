import React                   from "react"
import { Box, Heading, Stack } from "grommet/es6"
import PreviousBtn             from "./PreviousBtn"

export const Section = ({children, name, hideBackBtn}) => (<Box
	tag='section'
	pad={{
		vertical: 'medium',
		horizontal: 'medium'
	}}
>
	{!hideBackBtn
		? <Stack anchor='left' pad='small'>
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
		: null}
	{children}
</Box>)
