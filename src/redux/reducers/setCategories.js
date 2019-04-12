import { first } from 'jsutils/arrays'
import BaseReducer from './baseReducer'

import { SET_CATEGORIES } from '../constants'

class SetCategories extends BaseReducer {
    getNewState(state, action) {
        if (action.type === SET_CATEGORIES) {
            const categories = [...action.categories]

            // First request
            const selectedCategory = !state.selectedCategory && categories.length > 0
                ? first(categories)
                : state.selectedCategory

            const isShowSpinner = false

            return {
                ...state,
                categories,
                selectedCategory,
                isShowSpinner
            }
        }

        return state
    }
}

export default SetCategories
