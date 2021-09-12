export const toggle = (id) => ({
  type: 'TOGGLE',
  payload: {id}
});

export const add = (title) => ({
  type: 'ADD',
  payload: {title}
});

export const remove = (id) => ({
  type: 'REMOVE',
  payload: {id}
});

export const filterList = (appliedFilter) => ({
  type: 'FILTER',
  payload: {appliedFilter}
});

