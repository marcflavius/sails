import React, { Component } from "react"
import { Box, Image }       from "grommet"
import QuestionList         from "./QuestionList/QuestionList"
import Aux                  from "../../HOC/Aux"

const ServicePageTop = ({children}) => <Box
	direction="column"
	round='small'
	border={{
		color: 'brand',
		size: 'medium'
	}}
	pad="xxsmall"
>{children}</Box>

class QuestionItem extends Component {
	render() {

		const {questionItem} = this.props
		// console.log(questionItem)

		return (<Aux>
			<ServicePageTop>
				{this.renderText(questionItem)}
				{this.renderQuestionStatment(questionItem)}
				{this.renderImage(questionItem)}
			</ServicePageTop>
			{this.renderQuestionList(questionItem)}
		</Aux>)
	}

	renderQuestionList = (questionItem) => {
		// console.log("questionItem",questionItem)

		// console.log("questionItem", questionItem.inputType, questionItem.answerList)

		return <QuestionList
			inputType={questionItem.inputType}
			answerList={questionItem.answerList}
			onUpdateAnswer={this.props.onUpdateAnswer}
			onGetCurrentAnswer={this.props.onGetCurrentAnswer}
		/>
	}

	renderImage = (questionItem) => {
		return questionItem.image ? <Image alignSelf='center'
		                                   maxWidth={250}
		                                   src={questionItem.image}
		/> : null
	}

	renderQuestionStatment = (questionItem) => {
		return <pre>{questionItem.questionStatment}</pre>
	}

	renderText = (questionItem) => {
		return questionItem.text ? <pre>{questionItem.text}</pre> : null
	}
}

export default QuestionItem
