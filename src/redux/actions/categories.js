import {
    GET_CATEGORIES,
    SET_CATEGORIES,
    SELECT_CATEGORY
} from '../constants'

export const getCategories = () => ({
    type: GET_CATEGORIES
})

export const setCategories = categories => ({
    type: SET_CATEGORIES,
    categories
})

export const selectCategory = category => ({
    type: SELECT_CATEGORY,
    category
})