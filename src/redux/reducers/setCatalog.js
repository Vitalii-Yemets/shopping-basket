import BaseReducer from './baseReducer'

import { SET_CATALOG } from '../constants'

class SetCatalog extends BaseReducer {
    getNewState(state, action) {
        if (action.type === SET_CATALOG) {
            const catalog = [...action.catalog.results]

            const isShowSpinner = false

            return {
                ...state,
                catalog,
                isShowSpinner
            }
        }

        return state
    }
}

export default SetCatalog
