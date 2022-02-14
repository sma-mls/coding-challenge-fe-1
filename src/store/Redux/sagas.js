
import { all } from 'redux-saga/effects'
import todoSaga from './todo/sagas/Todo.saga.js'
// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
      todoSaga()
  ])
}
