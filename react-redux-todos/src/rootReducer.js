import { GET_TODO, ADD_TODO, REMOVE_TODO } from './actionCreators';

const initialState = {
   todos: []
};

export default function rootReducer(state = initialState, action) {
   switch (action.type) {
      case GET_TODO:
         return {
            ...state,
            todos: action.data
         };

      case ADD_TODO:
         return {
            ...state,
            todos: [...state.todos, action.todo]
         };

      case REMOVE_TODO:
         const todos = state.todos.filter(val => val._id !== action.id);
         return {
            ...state,
            todos
         };

      default:
         return state;
   }
}
