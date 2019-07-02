import { createStore } from 'redux'
// actions, reducers, store
//acionTypes
const ADD_TODO = 'ADD_TODO';
const NEW_NAME_TODO = 'NEW_NAME_TODO';
const UPDATE_TODO = 'UPDATE_TODO';
const DELETE_TODO = 'DELETE_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';
//action
export const addTodoAction = () => ({
   type: ADD_TODO
})
export const changeNameTodoAction = name => ({
   type: NEW_NAME_TODO,
   payload: name
})
export const updateTodoAction = id => ({
   type: UPDATE_TODO,
   payload: id
})
export const deleteTodoAction = id => ({
   type: DELETE_TODO,
   payload: id
})
export const toggleTodoAction = id => ({
   type: TOGGLE_TODO,
   payload: id
})
//reducers
const initialState = {
   todos: [
      { id: 1, name: 'Learn Redux', completed: false },
      { id: 2, name: 'Learn React-Redux', completed: true },
   ],
   name: 'NEW NAME'
}
const reducer = (state = initialState, action) => {
   switch (action.type) {
      case ADD_TODO:
         let newTodo = { id: (new Date()).getTime(), name: state.name, completed: false }
         return {
            ...state,
            todos: [...state.todos, newTodo]
         }
      case NEW_NAME_TODO:
         return {
            ...state,
            name: action.payload
         }
      case UPDATE_TODO:
         return {
            ...state,
            todos: state.todos.map(todo => todo.id === action.payload ? { ...todo, name: state.name } : todo)
         }
      case DELETE_TODO:
         return {
            ...state,
            todos: state.todos.filter(todo => todo.id !== action.payload)
         }
      case TOGGLE_TODO:
         return {
            ...state,
            todos: state.todos.map(todo => todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo)
         }
      default:
         return state;
   }
}

//store
export const store = createStore(reducer);