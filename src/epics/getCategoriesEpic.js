import { ofType } from 'redux-observable'
import { switchMap, map, tap } from 'rxjs/operators'

import servicePool from '../services/servicePool'
import BaseShopService from '../services/baseShopService'
import { BaseSpinnerService } from '../services/baseSpinnerService'

import { GET_CATEGORIES } from '../redux/constants'
import { setCategories } from '../redux/actions'

const getCategoriesEpic = action$ => action$.pipe(
    ofType(GET_CATEGORIES),
    tap(servicePool.getService(BaseSpinnerService).showSpinner),
    switchMap(servicePool.getService(BaseShopService).getCategories),
    tap(servicePool.getService(BaseSpinnerService).hideSpinner),
    map(setCategories)
)

export default getCategoriesEpic