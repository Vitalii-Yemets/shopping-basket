import BaseReducer from './baseReducer'

import { REMOVE_FROM_SHOPPING_BASKET } from '../constants'

class RemoveFromShoppingBasket extends BaseReducer {
    getNewState(state, action) {
        if (action.type === REMOVE_FROM_SHOPPING_BASKET) {
            const product = action.product
            const title = product.title

            let shoppingBasket = {}

            if (state.shoppingBasket.hasOwnProperty(title)) {
                shoppingBasket = {
                    ...state.shoppingBasket,
                    [title]: {
                        ...state.shoppingBasket[title],
                        count: state.shoppingBasket[title].count - 1
                    }
                }

                if (shoppingBasket[title].count === 0) {
                    delete state.shoppingBasket[title]

                    shoppingBasket = {
                        ...state.shoppingBasket
                    }
                }
            }

            return {
                ...state,
                shoppingBasket
            }
        }

        return state
    }
}

export default RemoveFromShoppingBasket
