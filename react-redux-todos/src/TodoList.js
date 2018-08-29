import React, { Component } from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodo';
import { connect } from 'react-redux';
import { addTodo, removeTodo, getTodos } from './actionCreator';
import { Route } from 'react-router-dom';

class TodoList extends Component {
   constructor(props) {
      super(props);
      this.handleAdd = this.handleAdd.bind(this);
      this.removeTodo = this.removeTodo.bind(this);
   }

   componentDidMount() {
      this.props.getTodos();
   }

   handleAdd(val) {
      this.props.addTodo(val);
   }

   removeTodo(id) {
      this.props.removeTodo(id);
   }

   render() {
      let todos = this.props.todos.map((val) => (
         <Todo
            removeTodo={this.removeTodo.bind(this, val._id)}
            task={val.task}
            key={val._id}
         />
      ));

      return (
         <div>
            <Route
               path="/todos/new"
               component={(props) => (
                  <NewTodoForm {...props} handleSubmit={this.handleAdd} />
               )}
            />
            <Route exact path="/todos" component={() => <div>{todos}</div>} />
         </div>
      );
   }
}

function mapStateToProp(reduxState) {
   return {
      todos: reduxState.todos
   };
}

export default connect(
   mapStateToProp,
   { addTodo, removeTodo, getTodos }
)(TodoList);
