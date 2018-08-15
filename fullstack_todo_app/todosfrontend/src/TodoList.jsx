import React, { Component } from 'react';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import * as apiCalls from './api';

class TodoList extends Component {
   state = {
      todos: []
   };

   componentDidMount() {
      this.loadTodos();
   }

   deleteTodo = async (id) => {
      await apiCalls.removeTodo(id);
      let { todos } = this.state;
      todos = todos.filter((todo) => todo._id !== id);
      this.setState({ todos });
   };

   toggleTodo = async (todo) => {
      const updatedTodo = await apiCalls.updateTodo(todo);
      let { todos } = this.state;
      todos = todos.map(
         (t) =>
            t._id === updatedTodo._id ? { ...t, completed: !t.completed } : t
      );
      this.setState({ todos });
   };

   loadTodos = async () => {
      const todos = await apiCalls.getTodos();
      this.setState({ todos });
   };

   addTodo = async (val) => {
      const newTodo = await apiCalls.createTodo(val);
      const { todos } = this.state;
      this.setState({ todos: [...todos, newTodo] });
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
