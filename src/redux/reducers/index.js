import ReducerPool from './reducerPool'

import GetCategories from './getCategories'
import SetCategories from './setCategories'
import SelectCategory from './selectCategory'
import GetCatalog from './getCatalog'
import SetCatalog from './setCatalog'
import AddToShoppingBasket from './addToShoppingBasket'
import RemoveFromShoppingBasket from './removeFromShoppingBasket'

ReducerPool.register(
    new GetCategories(),
    new SetCategories(),
    new SelectCategory(),
    new GetCatalog(),
    new SetCatalog(),
    new AddToShoppingBasket(),
    new RemoveFromShoppingBasket()
)

export default ReducerPool
