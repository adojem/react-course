import React from 'react';
import PropTypes from 'prop-types';

const TodoItem = ({ name, completed, onDelete, onToggle }) => (
   <li>
      <span
         style={{
            textDecoration: completed ? 'line-through' : 'none'
         }}
         onClick={onToggle}
      >
         {name}
      </span>
      <span onClick={onDelete}>X</span>
   </li>
);

TodoItem.propTypes = {
   name: PropTypes.string.isRequired,
   completed: PropTypes.bool.isRequired,
   onDelete: PropTypes.func.isRequired
};

export default TodoItem;
