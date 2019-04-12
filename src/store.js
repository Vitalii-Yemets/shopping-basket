import { createStore, combineReducers, applyMiddleware } from 'redux'
import { createEpicMiddleware, combineEpics } from 'redux-observable'
import { composeWithDevTools } from 'redux-devtools-extension'

// Initialization
import './services'

import logger from './logger'

import initialAppState from './initialState'

// Shop
import ReducerPool from './redux/reducers'
import {
    getCategoriesEpic,
    getCatalogEpic
} from './containers/Shop/epics'

const reducers = combineReducers({
    shopState: ReducerPool.getNewState
})

const epicMiddleware = createEpicMiddleware()

const middlewares = applyMiddleware(logger, epicMiddleware)

export const store = createStore(reducers, initialAppState, composeWithDevTools(middlewares))

const combinedEpics = combineEpics(
    getCategoriesEpic,
    getCatalogEpic
)

epicMiddleware.run(combinedEpics)
