import { createBrowserHistory }                  from "history"
import { applyMiddleware, compose, createStore } from "redux"
import createSagaMiddleware                      from "redux-saga"
import { createRootReducer }                     from "../reducer/root.reducer"
import rootSaga                                  from "../saga/root.saga"
import initialState                              from "./initialState"

export const history = createBrowserHistory()
const sagaMidlleware = createSagaMiddleware()
const middleware = [sagaMidlleware]
const reduxDevTool = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__

const composables = [applyMiddleware(...middleware), reduxDevTool()]
const enhencer = compose(...composables)

const store = createStore(createRootReducer(history), initialState, enhencer)
sagaMidlleware.run(rootSaga)
export default store
