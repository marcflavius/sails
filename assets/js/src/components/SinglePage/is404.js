import { Box, Button, Heading, Text } from "grommet/es6"
import React                          from 'react'
import { withRouter }                 from "react-router"
import Tear                           from "../UI/Tear/Tear"

export const is404 = withRouter((props) => {
	return <Box flex>
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
			<Heading>404</Heading>
			<Text style={{
				width: 300,
				marginBottom: 10
			}}>
				Votre page n'a pas été trouvée
			</Text>

			<Text style={{
				display: 'flex',
				justifyContent: 'flex-end'
			}}>

				<Button label="Retour" width={10} onClick={() => props.history.goBack()} />

				<Tear bounceDirection={'up'} tearDirection={'up'} x={-28} y={75} />
			</Text>
		</Box>
	</Box>
})
