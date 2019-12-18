import Input                        from "@material-ui/core/Input"
import { Text }                     from "grommet"
import { Card }                     from "grommet-controls"
import { Box, Tab, Tabs, TextArea } from "grommet/es6"
import PropTypes                    from 'prop-types'
import React, { Component }         from "react"
import { AppButton }                from "../../../../../UI/AppButton"

export class ExamCreateForm extends Component {

	state = {
		showPanel: false,
		inputType: "",
		image: "",
		text: "",
		questionStatment: "",
		answerList: ""
	}

	render() {
		return <Box flex pad={{
			top: "small"
		}}>
			<Box pad={"medium"}>
				<AppButton onClick={() => this.setState({
					showPanel: this.state.showPanel === true
						? false
						: true
				})}
				           text={!this.state.showPanel?"Afficher le panneau d'édition":"Masquer le panneau d'édition"} />
			</Box>
			{this.state.showPanel
				? <Tabs flex>
					<Tab title="Série question réponse">{this.renderSqr()}</Tab>
					<Tab title="Question à choix multiple">{this.renderQcm()}</Tab>
				</Tabs>
				: null}
		</Box>
	}

	renderQcm() {
		return <Box pad={"medium"}>
			<Card>
				<Box>
					<Text weight={"bold"}>Catégory</Text>
					<Input />
					<Text weight={"bold"}>Énoncé</Text>
					<TextArea horizontal={false} size={'small'}></TextArea>
					<Box>

						<Text>Image</Text>
						<Input type={"file"} />
					</Box>

					<Box flex direction={"row"}>
						<Box pad={{top: "sall"}} width={"medium"}>

							<Text weight={"bold"}>Question</Text>
							<Box pad={"small"}>
								<TextArea horizontal={false} size={'small'}>
								</TextArea>
							</Box>

							<Text weight={"bold"}>Choix</Text>
							<Box flex direction={"row"}>
								<Box pad={"small"}>
									<Input size={'small'}>
									</Input>
								</Box>

								<Box direction={'row'}>
									<Box margin={"small"}>
										<AppButton text={"Ajouter"} />
									</Box>
								</Box>
							</Box>
							<Text weight={"bold"}>Réponse</Text>
							<Box flex direction={"row"}>
								<Box pad={"small"}>
									<Input size={'small'}>
									</Input>
								</Box>
							</Box>

						</Box>


					</Box>
					<Box margin={"small"}>
						<AppButton text={"Ajouter"} />
					</Box>

				</Box></Card>
		</Box>
	}

	renderSqr() {
		return <Box pad={"medium"}>
			<Card>
				<Box>
					<Text weight={"bold"}>Catégory</Text>
					<Input />
					<Text weight={"bold"}>Énoncé</Text>
					<TextArea horizontal={false} size={'small'}></TextArea>
					<Box>

						<Text>Image</Text>
						<Input type={"file"} />
					</Box>

					<Box flex direction={"row"}>
						<Box width={"medium"}>
							<Box pad={"small"}>
								<Text weight={"bold"}>Question</Text>
								<TextArea horizontal={false} size={'small'}>
								</TextArea>
							</Box>
							<Box pad={"small"}>
								<Text weight={"bold"}>Réponse</Text>
								<TextArea size={'small'}>
								</TextArea>
							</Box></Box>


						<Box direction={'row'}>
							<Box margin={"small"}>
								<AppButton text={"Ajouter"} />
							</Box>
						</Box>

					</Box>
					<Box margin={"small"}>
						<AppButton text={"Ajouter"} />
					</Box>

				</Box>
			</Card>
		</Box>
	}

}

ExamCreateForm.propTypes = {
	action: PropTypes.string.isRequired,
	actionHandler: PropTypes.func.isRequired,
	showPanel: PropTypes.bool.isRequired
}
