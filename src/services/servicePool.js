import { first } from 'jsutils/arrays'

class ServicePool {
    static register(...service) {
        ServicePool.services.push(...service)
    }

    static getService(service) {
        return first(ServicePool.services, _service => _service instanceof service)
    }
}

ServicePool.services = []

export default ServicePool