import TextField                      from "@material-ui/core/TextField"
import { Box, Button, Form, Heading } from "grommet/es6"
import * as PropTypes                 from "prop-types"
import React, { Component }           from "react"
import { connect }                    from "react-redux"
import { withRouter }                 from "react-router"

const Section = ({children, name}) => <Box
	tag='section'
	pad={{
		vertical: 'medium',
		horizontal: 'xlarge'
	}}
>
	<Heading level={2} margin={{top: 'none'}} alignSelf='center'>
		{name}
	</Heading>
	{children}
</Box>

class CreatePage extends Component {

	state = {
		name: ""
	}

	updateName = (name) => {
		this.setState({name})
	}

	submitHandler = (e) => {
		e.preventDefault()
		this.props.dispatch(this.props.dispatchAction(this.state.name))
		this.props.history.push(this.props.onSuccessRoute)
	}

	render() {
		return <Section name={this.props.title}>
			<Form>
				<Box gap={"small"} style={{display: "flex"}}>

					<TextField
						onChange={(e) => this.updateName(e.target.value)}
						id="lastName"
						label="Titre"
						type="text"
						autoComplete="current-lastName"
						margin="normal"
					/>

				</Box>
				<Box direction="row" justify="end" margin={{top: "medium"}}>
					<Button type="submit" label="Créer" primary onClick={this.submitHandler} />
				</Box>
			</Form>
		</Section>
	}
}

CreatePage.propTypes = {
	title: PropTypes.string.isRequired,
	onSuccessRoute: PropTypes.string.isRequired,
	dispatchAction: PropTypes.func.isRequired
}

CreatePage = connect()(withRouter(CreatePage))

export default CreatePage
