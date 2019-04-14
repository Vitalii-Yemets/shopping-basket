import { ofType } from 'redux-observable'
import { switchMap, map, withLatestFrom, tap } from 'rxjs/operators'

import servicePool from '../services/servicePool'
import BaseShopService from '../services/baseShopService'
import { BaseSpinnerService } from '../services/baseSpinnerService'

import { SET_CATEGORIES, SELECT_CATEGORY } from '../redux/constants'
import { setCatalog } from '../redux/actions'

const getCatalogEpic = (action$, state$) => action$.pipe(
    ofType(SET_CATEGORIES, SELECT_CATEGORY),
    withLatestFrom(state$),
    tap(servicePool.getService(BaseSpinnerService).showSpinner),
    map(([action, state]) => state.selectedCategory.id),
    switchMap(servicePool.getService(BaseShopService).getCatalog),
    tap(servicePool.getService(BaseSpinnerService).hideSpinner),
    map(setCatalog)
)

export default getCatalogEpic