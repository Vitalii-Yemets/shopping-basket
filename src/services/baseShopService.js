class BaseShopService {
    getCategories() {
        throw new Error('Must be overriten.')
    }

    getCatalog() {
        throw new Error('Must be overriten.')
    }
}

export default BaseShopService