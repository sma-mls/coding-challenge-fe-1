function renderApp(input, todoList) {
  return `<div>${input}${todoList}</div>`;
}

function renderForm() {
  return `<div class="form">
    <input type="text" data-element="addTodoInput">
    <button data-element="addTodoButton">Add</button>
    <p>Apply a filter</p>
    <input id="showAll" type="radio" value="showAll" name="filterGroup" data-element="filterShowAll">
    <label for="showAll">Show All</label>
    <input id="completed" type="radio" value="completed" name="filterGroup" data-element="filterCompleted">
    <label for="completed">Completed</label>
    <input id="notCompleted" type="radio" value="notCompleted" name="filterGroup" data-element="filterNotCompleted">
    <label for="notCompleted">Not Completed</label>
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
  let filteredTodos;
  if (state.todoList.filter === 'completed') {
    filteredTodos = state.todoList.todos.filter((todo) => {
      return todo.completed;
    });
  } else if (state.todoList.filter === 'notCompleted') {
    filteredTodos = state.todoList.todos.filter((todo) => {
      return !todo.completed;
    });
  } else {
    filteredTodos = state.todoList.todos;
  }
  const todoItems = filteredTodos.map(renderTodoItem).join('');
  element.innerHTML = renderApp(
    renderForm(),
    renderTodos(todoItems)
  );
  let radioInput;
  if (state.todoList.filter === 'completed') {
    radioInput = document.querySelector('[data-element="filterCompleted"]');
  } else if (state.todoList.filter === 'notCompleted') {
    radioInput = document.querySelector('[data-element="filterNotCompleted"]');
  } else {
    radioInput = document.querySelector('[data-element="filterShowAll"]');
  }
  radioInput.checked = true;
}
