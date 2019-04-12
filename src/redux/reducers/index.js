import ReducerPool from './reducerPool'

import GetCategories from './getCategories'
import SetCategories from './setCategories'
import SelectedCategory from './selectedCategory'
import GetCatalog from './getCatalog'
import SetCatalog from './setCatalog'

ReducerPool.register(
    new GetCategories(),
    new SetCategories(),
    new SelectedCategory(),
    new GetCatalog(),
    new SetCatalog()
)

export default ReducerPool
