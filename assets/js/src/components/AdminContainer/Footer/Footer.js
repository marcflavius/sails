import React   from "react"
import { Box } from "grommet"

const Footer = ({children, getSize, ...rest}) => {
	console.log(window.innerHeight, window.innerWidth)

	return <Box
		tag='footer'
		direction='row'
		background='brand'
		fill='horizontal'
		justify='between'
		align='center'
		pad='small'
		{...rest}
	>
		{children}
	</Box>
}

const footer = (props) => <Footer style={{
	position: 'fixed',
	bottom:0
}}>
	footer
</Footer>

export default footer
