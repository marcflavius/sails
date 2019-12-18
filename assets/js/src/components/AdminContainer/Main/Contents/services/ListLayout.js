import Card                 from "@material-ui/core/Card"
import Fab                  from "@material-ui/core/Fab"
import { Add }              from "grommet-icons/es6"
import { Box, Stack, Text } from "grommet/es6"
import PropTypes            from 'prop-types'
import React                from "react"
import { AppConfig }        from "../../../../../AppConfig"
import ShowPage             from "./ShowPage"

export const ListLayout = ({children, showAddGroupBtn, title, onGroupAdd}) => {
	return <ShowPage >
		<Card
			margin={{bottom: "medium"}}>
			<Box direction='row' fill align='center' pad='small' gap='small'>
				<Box justify='between' gap='small'>
					<Stack anchor={"top-right"}>
						<Text size='medium' weight='bold'>
							{title}
						</Text>
						<Box align='center'>
							{!showAddGroupBtn
								? null
								: <Fab
									style={{backgroundColor: AppConfig.theme.global.colors.layout}}
									size='small'>
									<Add color='light' onClick={() => onGroupAdd} />
								</Fab>}
						</Box>
					</Stack>
					{children}
				</Box>
			</Box>
		</Card>
	</ShowPage>
}

ListLayout.propTypes = {
	title: PropTypes.string.isRequired,
	showAddGroupBtn: PropTypes.any,
	onGroupAdd: PropTypes.func
}

