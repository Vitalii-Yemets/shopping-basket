import BaseReducer from './baseReducer'

import { GET_CATALOG } from '../constants'

class GetCatalog extends BaseReducer {
    getNewState(state, action) {
        if (action.type === GET_CATALOG) {
            const isShowSpinner = true

            return {
                ...state,
                isShowSpinner
            }
        }

        return state
    }
}

export default GetCatalog
