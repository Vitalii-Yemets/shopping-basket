
import ServicePool from './servicePool'
import ZakazUaService from './zakazUaService'
import SpinnerService from './spinnerService'

ServicePool.register(
    new ZakazUaService({ withProxy: false }),
    new SpinnerService()
)