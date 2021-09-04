const actions = {
    add: title => ({
        type: 'API_ADD_TODO',
        title
    }),

    toggle: id => ({
        type: 'TOGGLE',
        id
    }),

    filter: val =>({
        type: 'FILTER',
        val
    })
}

export default actions;