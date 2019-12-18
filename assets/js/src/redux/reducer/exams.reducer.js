import R                      from "../../Constants/R"
import data                   from "../../components/ExamContainer/data/appData.json"
import { produce }            from "immer"
import { CREATE_EXAM_ACTION } from "../actions/backend/exam/createExam.action"
import { DELETE_EXAM_ACTION } from "../actions/backend/exam/deleteExam.action"
import { SHOW_EXAM_ACTION }   from "../actions/backend/exam/showExam.action"
// const data = require('../../components/ExamContainer/data/data');
let i = 1
let group = 0
export const examsReducer = (state = [ // exams array
	{
		id: 11511228,
		title: 'Comptabilité 1',
		content: data // obj
	}
], action) => {
	switch (action.type) {
		case CREATE_EXAM_ACTION:
			return [
				...state, {
					id: i++,
					title: action.title,
					content: {}
				}
			]

		case DELETE_EXAM_ACTION:
			return state.filter((el) => {
				return el.id !== action.id
			})
		case SHOW_EXAM_ACTION:
			return state.filter((el) => {
				return el.id !== action.id
			})

		case R.adminState.exams.DELETE_QUESTION:
			return produce(state, exams => {
				const currentExamIndex = exams.map(el => el.id).indexOf(action.examId)
				const examContent = exams[currentExamIndex].content[action.groupKey]['content']
				exams[currentExamIndex].content[action.groupKey]['content'] = examContent.filter((el) => {
					return el.id !== action.questionId
				})
			})

		case R.adminState.exams.CREATE_NEW_QUESTION:
			return produce(state, exams => {

				//get index
				const currentExamIndex = exams.map(exam => exam.id).indexOf(action.examId)

				console.log(currentExamIndex, action.groupKey)

				//add exam
				exams[currentExamIndex].content[action.groupKey]['content'].push({
					"id": i++,
					"inputType": "text",
					"image": "",
					"text": "",
					"questionStatment": "Saisir un énoncé",
					"answerList": []
				})
			})

		case R.adminState.exams.EXAM_ADD_NEW_GROUP:
			console.log(state[state.map(exam => exam.id).indexOf(action.examId)].content)

			// return
			return produce(state, exams => {
				const currentExamIndex = exams.map(exam => exam.id).indexOf(action.examId)

				exams[currentExamIndex]['content']["group" + group++] = {
					title: "groupe" + (group + 1),
					content: []
				}
			})

		default:
			return state
	}
}
