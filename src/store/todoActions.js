export const toggle = (id) => {
  return async (dispatch, getState) => {
    await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({
        completed: true
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    dispatch({
      type: 'TOGGLE',
      payload: { id },
    });
  };
}

export const remove = (id) => {
  return async (dispatch, getState) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: 'DELETE',
    });
    dispatch({
      type: 'REMOVE',
      payload: { id },
    })
  };
};

export const filterList = (appliedFilter) => ({
  type: 'FILTER',
  payload: { appliedFilter }
});

export const fetchTodos = () => {
  return async (dispatch, getState) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await response.json();
    dispatch({
      type: 'FETCH_TODOS',
      payload: { data }
    })
  };
};

export const createTodo = (title) => {
  return async (dispatch, getState) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
      method: 'POST',
      body: JSON.stringify({
        title,
        userId: 1,
        completed: false
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const data = await response.json();
    dispatch({
      type: 'CREATE_TODO',
      payload: {
        data
      }
    })
  };
};