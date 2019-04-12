import BaseReducer from './baseReducer'

import { ADD_TO_SHOPPING_BASKET } from '../constants'

class AddToShoppingBasket extends BaseReducer {
    getNewState(state, action) {
        if (action.type === ADD_TO_SHOPPING_BASKET) {
            const product = action.product
            const title = product.title

            const shoppingBasket = state.shoppingBasket.hasOwnProperty(title)
                ? ({
                    ...state.shoppingBasket,
                    [title]: {
                        ...state.shoppingBasket[title],
                        count: state.shoppingBasket[title].count + 1
                    }
                })
                : ({
                    ...state.shoppingBasket,
                    [title]: {
                        product,
                        count: 1
                    }
                })


            return {
                ...state,
                shoppingBasket
            }
        }

        return state
    }
}

export default AddToShoppingBasket
