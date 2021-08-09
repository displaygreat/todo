import React from 'react';
import PropTypes from 'prop-types';

import './ToDoInput.css';

const ToDoInput = ({ value, onChange, onKeyPress, onButtonClick }) => (
  <div className="todo-input-wrapper">
    <input
      className="todo-input"
      placeholder="Click to add task"
      onChange={onChange}
      onKeyPress={onKeyPress}
      value={value}
    />
    <button className="todo-button" onClick={onButtonClick}>+</button>
  </div>
);

ToDoInput.propTypes = {
  onChange: PropTypes.func,
  onKeyPress: PropTypes.func,
  onButtonClick: PropTypes.func,
  value: PropTypes.string,
}

ToDoInput.defaultProps = {
  onChange: () => {},
  onKeyPress: () => {},
  onButtonClick: () => {},
  value: '',
}

export default ToDoInput;