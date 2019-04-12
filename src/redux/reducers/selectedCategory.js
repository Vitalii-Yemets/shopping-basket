import BaseReducer from './baseReducer'

import { SELECTED_CATEGORY } from '../constants'

class SelectedCategory extends BaseReducer {
    getNewState(state, action) {
        if (action.type === SELECTED_CATEGORY) {
            const selectedCategory = action.category

            return {
                ...state,
                selectedCategory
            }
        }

        return state
    }
}

export default SelectedCategory
