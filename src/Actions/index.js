const actions = {
    add: title => ({
        type: 'ADD',
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