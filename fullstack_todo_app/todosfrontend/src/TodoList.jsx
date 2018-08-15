import React, { Component } from 'react';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';

const APIURL = '/api/todos/';

class TodoList extends Component {
   state = {
      todos: []
   };

   componentDidMount() {
      this.loadTodos();
   }

   addTodo = (val) => {
      fetch(APIURL, {
         method: 'post',
         headers: new Headers({
            'Content-Type': 'application/json'
         }),
         body: JSON.stringify({ name: val })
      })
         .then((resp) => {
            if (!resp.ok) {
               if (resp.status >= 400 && resp.status < 500) {
                  return resp.json().then((data) => {
                     const err = { errorMessage: data.message };
                     throw err;
                  });
               }
               const err = {
                  errrorMessage:
                     'Please try again later, server is not respondinig'
               };
               throw err;
            }
            return resp.json();
         })
         .then((newTodo) => {
            const { todos } = this.state;
            this.setState({ todos: [...todos, newTodo] });
         });
   };

   loadTodos = () => {
      fetch(APIURL)
         .then((resp) => {
            if (!resp.ok) {
               if (resp.status >= 400 && resp.status < 500) {
                  return resp.json().then((data) => {
                     const err = { errorMessage: data.message };
                     throw err;
                  });
               }
               const err = {
                  errorMessage:
                     'Please try again later, server is not responding'
               };
               throw err;
            }
            return resp.json();
         })
         .then((todos) => this.setState({ todos }));
   };

   deleteTodo = (id) => {
      const deleteURL = APIURL + id;
      fetch(deleteURL, {
         method: 'delete'
      })
         .then((resp) => {
            if (!resp.ok) {
               if (resp.status >= 400 && resp.status < 500) {
                  return resp.json().then((data) => {
                     const err = { errorMessage: data.message };
                     throw err;
                  });
               }
               const err = {
                  errrorMessage:
                     'Please try again later, server is not respondinig'
               };
               throw err;
            }
            return resp.json();
         })
         .then(() => {
            let { todos } = this.state;
            todos = todos.filter((todo) => todo._id !== id);
            this.setState({ todos });
         });
   };

   toggleTodo = (todo) => {
      const updateURL = APIURL + todo._id;
      fetch(updateURL, {
         method: 'put',
         headers: new Headers({
            'Content-Type': 'application/json'
         }),
         body: JSON.stringify({ completed: !todo.completed })
      })
         .then((resp) => {
            if (!resp.ok) {
               if (resp.status >= 400 && resp.status < 500) {
                  return resp.json().then((data) => {
                     const err = { errorMessage: data.message };
                     throw err;
                  });
               }
               const err = {
                  errrorMessage:
                     'Please try again later, server is not respondinig'
               };
               throw err;
            }
            return resp.json();
         })
         .then((updatedTodo) => {
            let { todos } = this.state;
            todos = todos.map(
               (t) =>
                  t._id === updatedTodo._id
                     ? { ...t, completed: !t.completed }
                     : t
            );
            this.setState({ todos });
         });
   };

   render() {
      let { todos } = this.state;
      todos = todos.map((t) => (
         <TodoItem
            key={t._id}
            {...t}
            onDelete={this.deleteTodo.bind(this, t._id)}
            onToggle={this.toggleTodo.bind(this, t)}
         />
      ));

      return (
         <div>
            <h1>Todo List!</h1>
            <TodoForm addTodo={this.addTodo} />
            <ul>{todos}</ul>
         </div>
      );
   }
}

export default TodoList;
