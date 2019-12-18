import { Box, Text }        from "grommet"
import produce              from "immer"
import React, { Component } from 'react'
import { connect }          from "react-redux"
import { withRouter }       from "react-router"
import C                    from "../../Constants/C"
import {
	currentQuestionIndexDecrementAx, currentQuestionIndexIncrementAx
}                                                                    from "../../redux/actions/frontend/currentQuestionIndex"
import Loading                                                       from "../UI/Loading/Loading"
import Control                                                       from "./Control/Control"
import appData                                                       from "./data/appData.json"
import {
	duplicateValueInArrayCheck, examItemSchema, objectValidator
}                                                                    from "./ExamInterfaceService"
import QuestionItem                                                  from "./QuestionItem/QuestionItem"
import { getLocalStorageSubjectList, removeLocalStorageSubjectList } from "./services/localStorage"

class ExamInterface extends Component {
	// TODO: Marc Flavius - refactor totalQuestionIndex

	state = {
		stateIsReady: [],
		totalQuestionIndex: 47,
		questionItem: {},
		loading: true
	}

	render() {
		const {currentQuestionIndex} = this.props
		const {questionItem, totalQuestionIndex, loading} = this.state

		return (loading
			? <Loading />
			: <Box flex>
				{this.renderTitle(questionItem.groupTitle)}
				<QuestionItem
					questionItem={questionItem}
					onUpdateAnswer={this.updateAnswer}
					onGetCurrentAnswer={this.getCurrentAnswer}
				/>
				<Control
					currentQuestionIndex={currentQuestionIndex}
					totalQuestionIndex={totalQuestionIndex}
					next={this.next}
					prev={this.prev}
				/>
			</Box>)
	}

	async componentDidMount() {
		try {
			await this.validateApiFetch(appData)
			await this.initialiseData(appData)
		} catch (e) {
			console.error("componentDidMount: ", e)
		}
	}

	componentDidUpdate(nextProps, nextState, nextContext) {
		// // console.log("componentDidUpdate", nextState.questionItem)
		if (this.props.currentQuestionIndex !== nextProps.currentQuestionIndex) {
			const result = getLocalStorageSubjectList()[this.props.currentQuestionIndex]
			this.setState({questionItem: result})
			// // console.log(JSON.stringify(result.questionItemQuestionList))
		}
		if (this.isLastQuestion(nextState)) {
			// console.log("last")
		}
	}

	renderTitle = (groupTitle) => <Box pad={'medium'}>
		<Text><strong>Partie: </strong>{groupTitle}</Text>
	</Box>

	/**
	 * Vérifie l'intégrité des données recueillees par l'api
	 */
	validateApiFetch = async (appData) => {
		try {
			// verifie que 2 groupes ne portent pas la mēme clé
			await duplicateValueInArrayCheck(appData.map((el) => el.id), (errMsg, duplicateKeyArray) => {
				console.error("[Api duplicate]", errMsg, duplicateKeyArray)
			})

			// verifie la structure des données
			await this.validateAppData(appData)
		} catch (e) {
			throw new Error(e)
		}
	}

	initialiseData = (morphedData) => {
		this.setState({questionItem: morphedData[this.props.currentQuestionIndex]})
		this.setState({totalQuestionIndex: Object.keys(morphedData).length - 1})
		this.initStorage(C.APP_NAME, morphedData)
		setInterval(() => {
		this.setState({loading: false})
		},4000)

	}

	isLastQuestion = () => {
		return (this.props.currentQuestionIndex) === this.state.totalQuestionIndex
	}

	isFirstQuestion = () => {
		return this.props.currentQuestionIndex === 0
	}

	fetchQuestion = async () => {

		await this.clearQuestionList()
		this.setState({questionItem: getLocalStorageSubjectList()[this.props.currentQuestionIndex]})
	}

	clearQuestionList = () => {
		const newQuestionList = {
			...this.state.questionItem,
			answerList: []
		}

		this.setState({questionItem: newQuestionList})
	}

	getCurrentAnswer = (id) => {
		return this.state.questionItem.answerList[id]
	}

	updateAnswer = (questionIndex, inputType, payload) => {
		this.setState(produce(draft => {
			switch (inputType) {
			case 'text':
				draft.questionItem.answerList[questionIndex].answer = payload
				return
			case 'radio':
				draft.questionItem.answerList.map((questionObj, index) => {
					draft.questionItem.answerList[index].answer = questionIndex === index
						? 'true'
						: 'false'
				})
				return
			case 'checkbox':
				const currentAnswer = draft.questionItem.answerList[questionIndex].answer
				draft.questionItem.answerList[questionIndex].answer = (currentAnswer === 'true')
					? 'false'
					: 'true'
			}
		}))
	}

	terminateTest = () => {
		console.log('done')
		this.props.history.push('/app/terminer') // on last question

	}

	/**
	 * Navige vers la page precédente
	 */

	prev = () => {
		const {questionItem} = this.state
		const {currentQuestionIndex} = this.props

		if (this.isFirstQuestion()) {
			return undefined // do nothing
		}

		try {
			// save question state to storage
			this.updateStorage(currentQuestionIndex, questionItem)

		} catch (e) {
			// TODO: Marc Flavius - crash the test with a grasful output
			console.error("can't access storage")
		}

		this.props.dispatch(currentQuestionIndexDecrementAx(this.props.currentQuestionIndex))
	}

	/**
	 * next - navigue vers la page suivante
	 */

	next = () => {
		const {questionItem} = this.state
		const {currentQuestionIndex} = this.props
		try {
			// save question state to storage
			this.updateStorage(currentQuestionIndex, questionItem)

		} catch (e) {
			// TODO: Marc Flavius - crash the test with a grasful output
			console.error("can't access storage")
		}
		// navigate to next question
		if (this.isLastQuestion()) {return this.terminateTest()}
		this.props.dispatch(currentQuestionIndexIncrementAx(this.props.currentQuestionIndex))
	}

	/**
	 * initialise le stockage de donnés en local en
	 * sauvgardant le données d'un examen de téléchargées de l'api
	 */
	initStorage = (appKey, appData) => {
		removeLocalStorageSubjectList()
		const data = JSON.stringify(appData)
		const appExist = localStorage.getItem(appKey)

		if (appExist) {
			return appExist
		} else {
			localStorage.setItem(appKey, data)
		}

	}

	/**
	 * mette à jour les données stocker en local sur l'ordinanteur du client
	 */
	updateStorage = (currentQuestionIndex, questionItem) => {
		const localStorageQuestions = getLocalStorageSubjectList()
		removeLocalStorageSubjectList()
		localStorageQuestions[currentQuestionIndex] = questionItem
		this.initStorage(C.APP_NAME, localStorageQuestions)
	}

	/**
	 * Valide la structure des données d'un groupe de l'examen
	 */
	validateAppData = (appData) => {
		try {
			if (Array.isArray(appData)) {
				objectValidator(appData, examItemSchema)
			} else {
				console.error('appData must be a Array')
			}
		} catch (e) {
			throw new Error(e)
		}
	}

}

/**
 * Connect redux au composant
 */


export default connect((state) => ({
	examState: state.examState,
	currentQuestionIndex: state.currentQuestionIndex
}))(withRouter(ExamInterface))
