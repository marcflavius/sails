import React, { Component } from "react"
import { Box }              from "grommet/es6"
import './Loading.css'
import { Text }             from "grommet"
import Aux                  from "../../HOC/Aux"

class Loading extends Component {
	state = {
		text: ''
	}

	render() {
		return (<Box flex
		             align={'center'}
		             justify={'center'}
		             background={'brand'}
		             style={{
			             height: '100vh',
			             transform: 'scale(1.5)'
		             }}
		>
			<div className="lds-ripple">
				<div />
				<div />
			</div>
			<Text color={'white'}>{this.renderDots()}</Text>
		</Box>)
	}

	componentDidMount() {
		this.loadingText()
	}

	loadingText() {
		let count = 0
		let text = ''.split('')
		this.interval = setInterval(() => {
			if (count === 3) {
				this.setState({text: '.'})
				count = 0
				text = ''.split('')
			}
			count++
			text.push('.')
			this.setState({text: text.join('')})
		}, 1000)
	}

	componentWillUnmount() {
		clearInterval(this.interval)
	}

	renderDots = () => <Aux>
		<span>Chargement en cours</span>
		<span style={{
			width:10,
			display:'block',
			float:'right'
		}}>{this.state.text}</span>
	</Aux>
}

export default Loading
