import React, { Component } from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';
import { connect } from 'react-redux';
import { getTodo, addTodo, removeTodo } from './actionCreators';
import { Route } from 'react-router-dom';

export class TodoList extends Component {
   componentDidMount() {
      this.props.getTodo();
   }

   handleAdd = val => {
      this.props.addTodo(val);
   };

   removeTodo = id => () => {
      this.props.removeTodo(id);
   };

   render() {
      const todos = this.props.todos.map(val => (
         <Todo
            removeTodo={this.removeTodo(val._id)}
            task={val.task}
            key={val._id}
         />
      ));

      return (
         <div>
            <Route
               path="/todos/new"
               component={props => (
                  <NewTodoForm {...props} handleSubmit={this.handleAdd} />
               )}
            />
            <Route exact path="/todos" component={() => <div>{todos}</div>} />
         </div>
      );
   }
}

const mapStateToProps = reduxState => {
   return {
      todos: reduxState.todos
   };
};

export default connect(
   mapStateToProps,
   { getTodo, addTodo, removeTodo }
)(TodoList);
