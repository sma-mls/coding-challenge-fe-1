import {
    ADD_TODO, ADD_TODO_FAIL, ADD_TODO_SUCCESS,
    TODO,
    TODO_FAIL,
    TODO_SUCCESS, TOGGLE, TOGGLE_FAIL, TOGGLE_SUCCESS
} from '../actions/Todo.actions';

const initialState = {
  loading: false,
  loaded: false,
  data: null,
  error: null
}

// Reducer
export default (state = initialState, action) => {
  switch (action.type) {

      case TODO:
          return {
              ...state,
              loading: true,
              loaded: false,
              data: null,
              error: null,
          };

      case TODO_SUCCESS:
          return {
              ...state,
              loading: false,
              loaded: true,
              error: null,
              data: action.data
          };

      case TODO_FAIL:
          return {
              ...state,
              loading: false,
              loaded: true,
              data: null,
              error: action.ex
          };

      case ADD_TODO:
          return {
              ...state,
              loading: true,
              loaded: false,
              data: null,
              error: null,
          };

      case ADD_TODO_SUCCESS:
          return {
              ...state,
              loading: false,
              loaded: true,
              error: null,
              data: action.data
          };

      case ADD_TODO_FAIL:
          return {
              ...state,
              loading: false,
              loaded: true,
              data: null,
              error: action.ex
          };

      case TOGGLE:
          return {
              ...state,
              loading: true,
              loaded: false,
              data: null,
              error: null,
          };

      case TOGGLE_SUCCESS:
          return {
              ...state,
              loading: false,
              loaded: true,
              error: null,
              data: action.data
          };

      case TOGGLE_FAIL:
          return {
              ...state,
              loading: false,
              loaded: true,
              data: null,
              error: action.ex
          };

    default:
      return state
  }
}
