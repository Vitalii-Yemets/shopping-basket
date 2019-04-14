import BaseReducer from './baseReducer'

import { SELECT_CATEGORY } from '../constants'

class SelectCategory extends BaseReducer {
    getNewState(state, action) {
        if (action.type === SELECT_CATEGORY) {
            const selectedCategory = action.category

            return {
                ...state,
                selectedCategory
            }
        }

        return state
    }
}

export default SelectCategory
