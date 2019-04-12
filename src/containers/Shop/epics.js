import { ofType } from 'redux-observable'
import { switchMap, map, withLatestFrom, tap } from 'rxjs/operators'

import servicePool from '../../services/servicePool'
import ShopService from '../../services/shopService'
import BaseSpinnerService from '../../services/baseSpinnerService'

import { GET_CATEGORIES, SET_CATEGORIES, SELECTED_CATEGORY } from '../../redux/constants'
import { setCategories, setCatalog } from '../../redux/actions'

export const getCategoriesEpic = action$ => action$.pipe(
    ofType(GET_CATEGORIES),
    tap(servicePool.getService(BaseSpinnerService).showSpinner),
    switchMap(servicePool.getService(ShopService).getCategories),
    tap(servicePool.getService(BaseSpinnerService).hideSpinner),
    map(setCategories)
)

export const getCatalogEpic = (action$, state$) => action$.pipe(
    ofType(SET_CATEGORIES, SELECTED_CATEGORY),
    withLatestFrom(state$),
    tap(servicePool.getService(BaseSpinnerService).showSpinner),
    map(([action, state]) => state.shopState.selectedCategory.id),
    switchMap(servicePool.getService(ShopService).getCatalog),
    tap(servicePool.getService(BaseSpinnerService).hideSpinner),
    map(setCatalog)
)