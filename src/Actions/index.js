const actions = {
    add: title => ({
        type: 'ADD',
        title
    }),

    toggle: id => ({
        type: 'TOGGLE',
        id
    })
}

export default actions;