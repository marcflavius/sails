import React, { Component } from 'react'
import { Box }              from "grommet/es6"
import { MessageBox }       from "../../UI/MessageBox"

class Main extends Component {
	render() {
		return (<Box flex gap='large' fill='horizontal'>
			{this.props.children}
		</Box>)
	}
}

export default Main
