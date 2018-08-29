import React, { Component } from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodo';
import { connect } from 'react-redux';
import { addTodo, removeTodo } from './actionCreator';
import { Route } from 'react-router-dom';

class TodoList extends Component {
   constructor(props) {
      super(props);
      this.handleAdd = this.handleAdd.bind(this);
      this.removeTodo = this.removeTodo.bind(this);
   }

   handleAdd(val) {
      this.props.addTodo(val);
   }

   removeTodo(id) {
      this.props.removeTodo(id);
   }

   render() {
      let todos = this.props.todos.map((val, index) => (
         <Todo
            removeTodo={this.removeTodo.bind(this, val.id)}
            task={val.task}
            key={index}
         />
      ));

      return (
         <div>
            <Route path="/todos/new" component={props => (
               <NewTodoForm {...props} handleSubmit={this.handleAdd} />
            )} />
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
   { addTodo, removeTodo }
)(TodoList);
