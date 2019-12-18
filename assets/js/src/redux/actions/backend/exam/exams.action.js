import R                      from "../../../../Constants/R"

export const examDeleteQuestionAction = (examId, groupKey, questionId) => ({
	type: R.adminState.exams.DELETE_QUESTION,
	examId,
	groupKey,
	questionId
})

export const examCreateNewQuestion = (examId, groupKey) => ({
	type: R.adminState.exams.CREATE_NEW_QUESTION,
	examId,
	groupKey
})

export const examCreateNewGroup = (examId,groupTitle) => ({
	type: R.adminState.exams.EXAM_ADD_NEW_GROUP,
	examId,
	groupTitle
})
