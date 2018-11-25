import React, { Component } from 'react';

export class NewTodoForm extends Component {
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
      this.props.handleSubmit(this.state.task);
      e.target.reset();
      this.props.history.push('/todos');
   };

   render() {
      return (
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
      );
   }
}

export default NewTodoForm;
