const service = store => next => action => {
    next(action)
}

export default service