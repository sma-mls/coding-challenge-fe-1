function renderApp(input, todoList) {
  return `<div>${input}${todoList}</div>`;
}

// Added additional elements for filter
function renderForm(filterValue) {
  return `<div class="form">
    <input type="text" data-element="addTodoInput">
    <button data-element="addTodoButton">Add</button>
    <div>
      <input type="radio" data-element="todoFilter" id="filter_all" value="all" name="todoFilter" ${filterValue == 'all'? 'checked': ''}/><label for="filter_all">All</label>
      <input type="radio" data-element="todoFilter" id="filter_open" value="open" name="todoFilter" ${filterValue == 'open'? 'checked': ''}/><label for="filter_open">Open</label>
      <input type="radio" data-element="todoFilter" id="filter_close" value="close" name="todoFilter" ${filterValue == 'close'? 'checked': ''}/><label for="filter_close">Close</label>
    </div>
  </div>`;
}

function renderTodos(todoItems) {
  return `<ul class="todos">${todoItems}</ul>`;
}

function renderTodoItem(todo) {
  return `<li class="${`todos__item todos__item_${todo.completed && 'checked'}`}">
    <input type="checkbox" data-element="toggleTodo" data-id="${todo.id}"${todo.completed ? ' checked' : ''}>
    ${todo.title}
  </li>`;
}


export default (element, state) => {
  const todoItems = state.filterTodos.map(renderTodoItem).join('');
  const filterValue = state.filterValue;
  element.innerHTML = renderApp(
    renderForm(filterValue),
    renderTodos(todoItems)
  );
}
