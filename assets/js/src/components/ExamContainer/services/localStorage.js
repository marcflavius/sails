import C from "../../../Constants/C"

export const removeLocalStorageSubjectList = () => {
	localStorage.removeItem(C.APP_NAME)
}

export const getLocalStorageSubjectList = () => {
	return JSON.parse(localStorage.getItem(C.APP_NAME))
}

//auth
export const removeLocalStorageAuth = () => {
	localStorage.removeItem(C.AUTH)
}

export const getLocalStorageAuth = () => {
	return JSON.parse(localStorage.getItem(C.AUTH))
}

export const setLocalStorageAuth = (item) => {
	return localStorage.setItem(C.AUTH, JSON.stringify(item))
}
