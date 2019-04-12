import BaseReducer from './baseReducer'

import { GET_CATEGORIES } from '../constants'

class GetCategories extends BaseReducer {
    getNewState(state, action) {
        if (action.type === GET_CATEGORIES) {
            const isShowSpinner = true

            return {
                ...state,
                isShowSpinner
            }
        }

        return state
    }
}

export default GetCategories
