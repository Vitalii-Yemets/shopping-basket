import {
    GET_CATALOG,
    SET_CATALOG
} from '../constants'

export const getCatalog = categoryId => ({
    type: GET_CATALOG,
    categoryId
})

export const setCatalog = catalog => ({
    type: SET_CATALOG,
    catalog
})