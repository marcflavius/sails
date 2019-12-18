import React, { Component }           from 'react'
import { Box, Button, Heading, Text } from 'grommet'
import Modal                          from "../UI/Modal"
import { Event }                      from '../../App'
import Tear                           from "../UI/Tear/Tear"
import Page                           from "../UI/Page"

class Cgu extends Component {
	render() {
		return (<Page>
			<Box flex>
				<Box margin={"medium"}
				     pad={"small"}
				     round={"small"}
				     border={{
					     color: "brand",
					     size: "large"
				     }}
				     background={"brand"}
				     color={"brand"}
				     flex alignSelf={"center"}
				     justify={"center"}
				>
					<Heading>Cgu</Heading>
					<Text style={{width: 300}}>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, consectetur dolor earum
						illo
						itaque nihil pariatur quis quos sequi velit? Aspernatur, consectetur excepturi perferendis quod
						temporibus vero voluptas voluptate. Suscipit!
					</Text>

					<Text style={{
						display: 'flex',
						justifyContent: 'flex-end'
					}}>

						<Button label="J'accepte" width={10} onClick={() => {
							Event.emit('modal.open', '/app/info', 'Je confirme les informations renseignées')
						}} />

						<Tear bounceDirection={'up'} tearDirection={'up'} x={-28} y={75} />
					</Text>
					<Modal type={'confirmed'} history={this.props.history} />
				</Box>
			</Box>
		</Page>)
	}
}

export default Cgu
