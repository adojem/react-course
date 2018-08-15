import React, { Component } from 'react';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';

const APIURL = '/api/todos';

class TodoList extends Component {
   constructor(props) {
      super(props);
      this.state = {
         todos: []
      };

      this.addTodo = this.addTodo.bind(this);
   }

   componentDidMount() {
      this.loadTodos();
   }

   loadTodos() {
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
   }

   addTodo(val) {
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
   }

   render() {
      let { todos } = this.state;
      todos = todos.map((t) => <TodoItem key={t._id} {...t} />);
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
