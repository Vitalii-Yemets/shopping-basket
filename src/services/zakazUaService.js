import {
    from as ObservableFrom,
    throwError // Not now
} from 'rxjs'

import ShopService from './shopService'

class ZakazUaService extends ShopService {
    constructor({ withProxy }) {
        super()

        // hacks ^_^
        this.proxy = 'https://cors-anywhere.herokuapp.com'

        this.categories = withProxy
            ? `${this.proxy}/'https://staging-stores-api.zakaz.ua/stores/default/categories/'`
            : 'https://staging-stores-api.zakaz.ua/stores/default/categories/'

        this.catalog = withProxy
            ? `${this.proxy}/'https://staging-stores-api.zakaz.ua/stores/default/categories/{<categoryId>}/products/'`
            : 'https://staging-stores-api.zakaz.ua/stores/default/categories/{<categoryId>}/products/'

        this.getOptions = {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'X-Chain': 'novus'
            })
        }

        this.getCategories = this.getCategories.bind(this)
        this.getCatalog = this.getCatalog.bind(this)
    }

    getCategories() {
        const categories = this.categories
        const getOptions = this.getOptions

        return ObservableFrom(
            fetch(categories, getOptions)
                .then(response => response.json())
                // TODO: Not now
                .catch(error => throwError(error))
        )
    }

    getCatalog(categoryId) {
        const getOptions = this.getOptions

        const catalogUrlWithCategoryId = this.catalog.replace(/{<categoryId>}/, categoryId)

        return ObservableFrom(
            fetch(catalogUrlWithCategoryId, getOptions)
                .then(response => response.json())
                // TODO: Not now
                .catch(error => throwError(error))
        )
    }
}


export default ZakazUaService