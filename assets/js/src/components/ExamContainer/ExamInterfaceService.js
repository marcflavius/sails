import Sc from "simpl-schema"

export const examItemSchema = {

	'groupTitle': {
		type: String,
		required: true
	},
	'id': {
		type: String,
		required: true
	},
	'inputType': {
		type: String,
		required: true,
		allowedValues: ['text', 'radio', 'checkbox']
	},
	'image': String,
	'questionStatment': String,
	'text': String,
	'answerList': {
		type: Array,
		required: true,
		minCount: 0,
		maxCount: 6,
		custom: function () {
			const answerList = this.value
			duplicateObjKeyInArrayCheck(answerList, (errMsg, duplicateKeyArray) => {
				console.group()
				console.info(errMsg, "error in:", this.obj)
				console.info("key(s):", duplicateKeyArray)
				console.groupEnd()
			})
		}
	},
	'answerList.$': {
		type: Object,
		blackbox: false
	},
	'answerList.$.id': String,
	'answerList.$.question': String,
	'answerList.$.answer': String
}

/**
 * Vérifie qu'un objet eest unique basé sur une clé de l'objet
 */

export const duplicateObjKeyInArrayCheck = (array, callback) => {
	const keys = array.reduce((acc, el) => {
		return acc.concat(el.id)
	}, [])
	let duplicates = keys.reduce(function (acc, el, i, arr) {
		if (arr.indexOf(el) !== i && acc.indexOf(el) < 0) {
			return acc.concat(el)
		}
		return acc
	}, [])
	if (!!duplicates.length) {
		callback("duplicate key(s):", duplicates)
	}
}

export const duplicateValueInArrayCheck = (array, callback) => {
	try {
		let duplicates = array.reduce(function (acc, el, i, arr) {
			if (arr.indexOf(el) !== i && acc.indexOf(el) < 0) {
				return acc.concat(el)
			}
			return acc
		}, [])
		if (!!duplicates.length) {
			callback("duplicate key(s):", duplicates)
		}

	} catch (e) {
		throw new Error(e)
	}
}

/**
 * Validate a object on a defined schema
 */
export const objectValidator = (appData, examItemSchema) => {
	const validationContext = new Sc(examItemSchema).newContext()
	appData.forEach((el) => {
		validationContext.validate(el)
		if (!validationContext.isValid()) {
			console.group()
			console.info(validationContext.validationErrors()[0])
			console.error("element: ", el)
			console.groupEnd()
		}

	})
}
