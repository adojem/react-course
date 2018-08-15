import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoForm extends Component {
   state = {
      inputValue: ''
   };

   handleSubmit = () => {
      const { addTodo } = this.props;
      const { inputValue } = this.state;
      addTodo(inputValue);
   };

   handleChange = (e) => {
      this.setState({
         inputValue: e.target.value
      });
   };

   render() {
      const { inputValue } = this.state;
      return (
         <div>
            <input
               type="text"
               value={inputValue}
               onChange={this.handleChange}
            />
            <button onClick={this.handleSubmit} type="submit">
               Add Todo
            </button>
         </div>
      );
   }
}

TodoForm.propTypes = {
   addTodo: PropTypes.func.isRequired
};

export default TodoForm;
