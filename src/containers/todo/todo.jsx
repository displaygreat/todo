import React, { Component } from 'react';

import ToDoInput from '../../components/ToDoInput/ToDoInput';
import ToDoList from '../../components/ToDoList/ToDoList';
import Footer from '../../components/footer/footer';

import './todo.css';

class ToDo extends Component {

  state = {
    activeFilter: 'all',
  }

  render() {
    const { activeFilter } = this.state;
    const tasksList = [];
    const isTasksExist = tasksList && tasksList.length > 0;

    return (
      <div className="todo-wrapper">
        <ToDoInput />
        {isTasksExist && <ToDoList tasksList={tasksList} />}
        {isTasksExist && <Footer amount={tasksList.length} activeFilter={activeFilter} />}
      </div>
    );
  }
}

export default ToDo;