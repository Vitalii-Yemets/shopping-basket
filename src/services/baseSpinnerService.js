import { createContext } from 'react'

export const SpinnerContext = createContext({})

export class BaseSpinnerService {
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