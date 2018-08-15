import React from 'react';
import PropTypes from 'prop-types';

const TodoItem = ({ name, completed }) => (
   <li
      style={{
         textDecoration: completed ? 'line-through' : 'none'
      }}
   >
      {name}
   </li>
);

TodoItem.propTypes = {
   name: PropTypes.string.isRequired,
   completed: PropTypes.bool.isRequired
};

export default TodoItem;
