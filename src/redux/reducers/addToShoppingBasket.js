import BaseReducer from './baseReducer'

import { ADD_TO_SHOPPING_BASKET } from '../constants'

class AddToShoppingBasket extends BaseReducer {
    getNewState(state, action) {
        if (action.type === ADD_TO_SHOPPING_BASKET) {
            const product = action.product
            const title = product.title

            const stringPrice = product.price.toString()
            const price = parseFloat(`${stringPrice.slice(0, stringPrice.length - 2)}.${stringPrice.slice(stringPrice.length - 2, stringPrice.length)}`)
            const totalPrice = state.totalPrice + price

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
                totalPrice,
                shoppingBasket
            }
        }

        return state
    }
}

export default AddToShoppingBasket