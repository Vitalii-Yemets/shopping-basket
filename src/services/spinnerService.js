import BaseSpinnerService from './baseSpinnerService'

class SpinnerService extends BaseSpinnerService {
    constructor() {
        super()

        this.isShowSpinner = false

        this.getSpinnerState = this.getSpinnerState.bind(this)
        this.showSpinner = this.showSpinner.bind(this)
        this.hideSpinner = this.hideSpinner.bind(this)
    }

    getSpinnerState() {
        return this.isShowSpinner
    }

    showSpinner() {
        this.isShowSpinner = true
    }

    hideSpinner() {
        this.isShowSpinner = false
    }
}

export default SpinnerService