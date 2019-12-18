import React                                      from "react"
import { Box }                                    from "grommet/es6"
import PropTypes                                  from 'proptypes'
import { CheckBox, RadioButton, Text, TextInput } from "grommet"

const answerList = (props) => {

	return props.answerList.map((questionObj, index) => {
		let inputType = props.inputType
		switch (inputType) {
			case 'text':
				inputType = (<Box style={{width: 100}}>
					<TextInput
						value={questionObj.answer}
						key={`answer-${index}`}
						onChange={(e) => {
							props.onUpdateAnswer(index, props.inputType, e.target.value)
						}}
						style={{
							padding: 0,
							width: 40,
							textAlign: 'center'
						}}
						id={`answer-${index}`}
						name={`answer-${index}`}
						size='large'
						dropHeight='small'
					/>
				</Box>)
				break
			case 'checkbox':
				inputType = (<CheckBox
					key={`answer-${index}`}
					checked={questionObj.answer === 'true' ? true : false}
					// label={"item"}
					onChange={() => {
						props.onUpdateAnswer(index, props.inputType, (questionObj.answer === 'true' ? true : false))
					}}
				/>)
				break
			case 'radio':
				inputType = (<RadioButton
					label={`choix ${index}`}
					key={`answer-${index}`}
					name="radio"
					checked={questionObj.answer === 'true' ? true : false}
					onChange={() => {
						props.onUpdateAnswer(index, props.inputType, index)
					}}
				/>)
				break
			default:
				return undefined
		}

		return <Box
			width={"medium"}
			justify={'between'}
			key={index}
			direction="row"
			pad="xxsmall">
			<Box pad={'small'}>
				<Text pad={{left: 'large'}}>{questionObj.question}</Text>
			</Box>
			{inputType}
		</Box>
	})

}
answerList.propTypes = {
	answerList: PropTypes.array.isRequired
}

export default answerList
