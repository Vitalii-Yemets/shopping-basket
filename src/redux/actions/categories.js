import {
    GET_CATEGORIES,
    SET_CATEGORIES,
    SELECTED_CATEGORY
} from '../constants'

export const getCategories = () => ({
    type: GET_CATEGORIES
})

export const setCategories = categories => ({
    type: SET_CATEGORIES,
    categories
})

export const selectedCategory = category => ({
    type: SELECTED_CATEGORY,
    category
})