import React from 'react';
import PropTypes from 'prop-types';

import './ToDoInput.css';

const ToDoInput = ({ value, onChange, onKeyPress }) => (
  <div className="todo-input-wrapper">
    <input
      className="todo-input"
      placeholder="Click to add task"
      onChange={onChange}
      onKeyPress={onKeyPress}
      value={value}
    />
  </div>
);

ToDoInput.propTypes = {
  onChange: PropTypes.func,
  onKeyPress: PropTypes.func,
  value: PropTypes.string,
}

ToDoInput.defaultProps = {
  onChange: () => {},
  onKeyPress: () => {},
  value: '',
}

export default ToDoInput;