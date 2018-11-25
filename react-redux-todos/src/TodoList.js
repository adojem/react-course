import React, { Component } from 'react';
import Todo from './Todo';
import { connect } from 'react-redux';
import { ADD_TODO, REMOVE_TODO } from './actionCreators';

export class TodoList extends Component {
   constructor(props) {
      super(props);
      this.state = {
         task: ''
      };
   }

   handleSubmit = e => {
      e.preventDefault();
      this.props.dispatch({
         type: ADD_TODO,
         task: this.state.task
      });
      e.target.reset();
   };

   handleChange = e => {
      this.setState({
         [e.target.name]: e.target.value
      });
   };

   removeTodo = id => () => {
      this.props.dispatch({
         type: REMOVE_TODO,
         id
      });
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

export default connect(mapStateToProps)(TodoList);
