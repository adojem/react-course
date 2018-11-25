export const GET_TODO = 'GET_TODO';
export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';

function handleTodos(data) {
   return {
      type: GET_TODO,
      data
   };
}

function handleAdd(todo) {
   return {
      type: ADD_TODO,
      todo
   };
}

function handleRemove(id) {
   return {
      type: REMOVE_TODO,
      id
   };
}

export function getTodo() {
   return dispatch => {
      return fetch('http://localhost:3001/api/todos')
         .then(res => res.json())
         .then(data => dispatch(handleTodos(data)))
         .catch(err => console.log('SOMETHING WENT WRONG!', err));
   };
}

export function addTodo(task) {
   return dispatch => {
      return fetch('http://localhost:3001/api/todos', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json'
         },
         body: JSON.stringify({ task })
      })
         .then(res => res.json())
         .then(data => dispatch(handleAdd(data)))
         .catch(err => console.log('SOMETHING WENT WRONG!', err));
   };
}

export function removeTodo(id) {
   return dispatch => {
      return fetch(`http://localhost:3001/api/todos/${id}`, {
         method: 'DELETE'
      })
         .then(res => res.json())
         .then(data => {
            return dispatch(handleRemove(id));
         })
         .catch(err => console.log('SOMETHING WENT WRONG!', err));
   };
}
