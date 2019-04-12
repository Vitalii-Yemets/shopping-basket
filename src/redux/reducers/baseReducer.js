class BaseReducer {
    getNewState(state, action) {
        throw new Error('Must be overriten.')
    }
}

export default BaseReducer
