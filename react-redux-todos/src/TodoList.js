import React, { Component } from 'react';
import Todo from './Todo';
import { connect } from 'react-redux';
import { addTodo, removeTodo } from './actionCreators';

export class TodoList extends Component {
   constructor(props) {
      super(props);
      this.state = {
         task: ''
      };
   }

   handleChange = e => {
      this.setState({
         [e.target.name]: e.target.value
      });
   };

   handleSubmit = e => {
      e.preventDefault();
      this.props.addTodo(this.state.task);
      e.target.reset();
   };

   removeTodo = id => () => {
      this.props.removeTodo(id);
   };

   render() {
      const todos = this.props.todos.map((val, index) => (
         <Todo
            removeTodo={this.removeTodo(val.id)}
            task={val.task}
            key={index}
         />
      ));

      return (
         <div>
            <form onSubmit={this.handleSubmit}>
               <label htmlFor="task">Task </label>
               <input
                  type="text"
                  name="task"
                  id="task"
                  onChange={this.handleChange}
               />
               <button>Add a Todo!</button>
            </form>
            <div>
               <ul>{todos}</ul>
            </div>
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
   { addTodo, removeTodo }
)(TodoList);
