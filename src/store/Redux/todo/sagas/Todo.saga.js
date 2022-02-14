import {
    ADD_TODO, ADD_TODO_FAIL, ADD_TODO_SUCCESS,
    TODO,
    TODO_FAIL,
    TODO_SUCCESS, TOGGLE, TOGGLE_FAIL, TOGGLE_SUCCESS,
} from '../actions/Todo.actions';
import { put, takeLatest, all, call } from 'redux-saga/effects';

const uniqueId = {
    currentId: 0,
    get() {
        this.currentId += 1;
        return this.currentId;
    }
};

const data = [
    {
        id: uniqueId.get(),
        title: 'JS-101',
        completed: true
    },
    {
        id: uniqueId.get(),
        title: 'JS-102',
        completed: false
    },
    {
        id: uniqueId.get(),
        title: 'JS-201',
        completed: false
    },
    {
        id: uniqueId.get(),
        title: 'JS-202',
        completed: false
    }
]

function fetchData(payload) {
    // ideally we should be getting data from BE here, but as we are just mocking the service I am returning the data from file.
    return {data};
}
function addData(payload) {
    data.push({
        id: uniqueId.get(),
        title: payload.item,
        completed: false
    });
    return {data};
}

function toggleItem(payload) {
    for (let todo of data) {
        if (todo.id === payload.id) {
            todo.completed = !todo.completed;
            break;
        }
    }
    return {data};
}

function* getTodoList(payload) {
    const { data, ex } = yield call(fetchData,payload);
    if (data)
        yield put({ type:TODO_SUCCESS, data });
    else
        yield put({ type:TODO_FAIL, ex });
}

function* addTodoList(payload) {
    const { data, ex } = yield call(addData,payload);
    if (data)
        yield put({ type:ADD_TODO_SUCCESS, data });
    else
        yield put({ type:ADD_TODO_FAIL, ex });
}

function* toggle(payload) {
    const { data, ex } = yield call(toggleItem,payload);
    if (data)
        yield put({ type:TOGGLE_SUCCESS, data });
    else
        yield put({ type:TOGGLE_FAIL, ex });
}

function* watchAddTodo() {
    yield takeLatest(ADD_TODO, addTodoList)
}
function* watchTodo() {
    yield takeLatest(TODO, getTodoList)
}
function* watchToggle() {
    yield takeLatest(TOGGLE, toggle)
}

export default function* todoSaga() {
  yield all([
      watchTodo(),
      watchAddTodo(),
      watchToggle()
  ]);
}
