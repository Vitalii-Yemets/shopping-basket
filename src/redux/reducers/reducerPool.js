class ReducerPool {
    static register(...reducer) {
        ReducerPool.reducers.push(...reducer)
    }

    static getNewState(state = null, action) {
        return ReducerPool.reducers.reduce(
            (state, reducer) => reducer.getNewState(state, action), state)
    }
}

ReducerPool.reducers = []

export default ReducerPool