class BaseSpinnerService {
    getSpinnerState() {
        throw new Error('Must be overriten.')
    }

    showSpinner() {
        throw new Error('Must be overriten.')
    }

    hideSpinner() {
        throw new Error('Must be overriten.')
    }
}

export default BaseSpinnerService