import { createStore, applyMiddleware } from 'redux'
import { createEpicMiddleware, combineEpics } from 'redux-observable'
import { composeWithDevTools } from 'redux-devtools-extension'

import './services'
import logger from './logger'
import initialAppState from './initialState'
import ReducerPool from './redux/reducers'
import { getCategoriesEpic, getCatalogEpic } from './epics'

const epicMiddleware = createEpicMiddleware()

const middlewares = []

if (process.env.NODE_ENV !== 'production') {
    middlewares.push(logger)
    middlewares.push(epicMiddleware)
} else {
    middlewares.push(epicMiddleware)
}

export const store = createStore(
    ReducerPool.getNewState,
    initialAppState,
    composeWithDevTools(applyMiddleware(...middlewares))
)

const combinedEpics = combineEpics(
    getCategoriesEpic,
    getCatalogEpic
)

epicMiddleware.run(combinedEpics)
