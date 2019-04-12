import {
    ADD_TO_SHOPPING_BASKET,
    REMOVE_FROM_SHOPPING_BASKET
} from '../constants'

export const addToShoppingBasket = product => ({
    type: ADD_TO_SHOPPING_BASKET,
    product
})

export const removeToShoppingBasket = product => ({
    type: REMOVE_FROM_SHOPPING_BASKET,
    product
})