import { Box, Button, Grid, Table, TableBody, TableCell, TableHeader, TableRow } from "grommet"
import { isEmpty }                                                               from "lodash"
import PropTypes                                                                 from 'prop-types'
import React                                                                     from "react"
import { connect }                                                               from "react-redux"
import { withRouter }                                                            from "react-router"
import { formatRoute }                                                           from 'react-router-named-routes'
import { setCurrentExamIdAction }                                                from "../../../../../redux/actions/backend/currentExamId/setCurrentExamId.action"
import { MessageBox }                                                            from "../../../../UI/MessageBox"
import { Section }                                                               from "../../../../UI/Section"

const ListPage = connect()(withRouter(({
	title, entity, history, dispatch, emptyMsg, deleteAction, showEndpoint, setCurrentIdAction
}) => isEmpty(entity)
	? (<MessageBox msg={emptyMsg} />)
	: <Section name={title}>
		<Grid columns={{
			"count": "fit",
			size: 'small'
		}} gap='large' alignContent='center'>
			<Box>
				<Table>
					<TableHeader>
						<TableRow>
							<TableCell size='xlarge' border='bottom'>Name</TableCell>
							<TableCell scope='col' border='bottom' />
							<TableCell scope='col' border='bottom' />
						</TableRow>
					</TableHeader>
					<TableBody>
						{entity.map((el) => {
							return <TableRow key={el.id}>
								<TableCell><strong>{el.title}</strong></TableCell>
								<TableCell><Button label='Voir' onClick={() => {
									dispatch(setCurrentIdAction(parseInt(el.id)))
									history.push(formatRoute(showEndpoint, {id: el.id}))
								}} /></TableCell>
								<TableCell>
									<Button
										primary
										onClick={() => {
											dispatch(deleteAction(el.id))
										}}
										hoverIndicator={{
											color: 'danger'
										}} label='Supprimer' />
								</TableCell>
							</TableRow>
						})}
					</TableBody>
				</Table>
			</Box>
		</Grid>
	</Section>))
ListPage.propTypes = {
	title: PropTypes.string.isRequired,
	entity: PropTypes.arrayOf(PropTypes.any).isRequired,
	emptyMsg: PropTypes.string.isRequired,
	deleteAction: PropTypes.func.isRequired,
	showEndpoint: PropTypes.string.isRequired,
	setCurrentIdAction: PropTypes.func.isRequired
}

export default ListPage
