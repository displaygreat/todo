import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addTask, removeTask, completeTask, changeFilter } from '../../actions/actionCreator';
import ToDoInput from '../../components/ToDoInput/ToDoInput';
import ToDoList from '../../components/ToDoList/ToDoList';
import Footer from '../../components/footer/footer';

import './todo.css';

class ToDo extends Component {

  state = {
    taskText: ''
  }

  handleInputChange = ({ target: { value } }) => {
    this.setState({
      taskText: value,
    })
  }

  addTask = ({ key, target }) => {
    const { taskText } = this.state;

    if (taskText.length > 2 && (key === "Enter" || target.className === "todo-button")) {
      const { addTask } = this.props;

      addTask(new Date().getTime(), taskText, false);
    
      this.setState({
        taskText: ''
      })
    }
  }

  filterTasks = (tasks, activeFilter) => {
    switch (activeFilter) {
      case 'completed':
        return tasks.filter(task => task.isCompleted);
        break;
      case 'active':
        return tasks.filter(task => !task.isCompleted);
        break;
      default:
        return tasks;
    }
  }

  getActiveTasksAmount = tasks => tasks.filter(task => !task.isCompleted).length;

  render() {
    const { taskText } = this.state;
    const { tasks, removeTask, completeTask, filters, changeFilter } = this.props;
    const isTasksExist = tasks && tasks.length > 0;
    const filteredTasks = this.filterTasks(tasks, filters);
    const tasksCounter = this.getActiveTasksAmount(tasks);

    return (
      <div className="todo-wrapper">
        <ToDoInput onKeyPress={this.addTask} onButtonClick={this.addTask} onChange={this.handleInputChange} value={taskText} />
        {isTasksExist && <ToDoList tasksList={filteredTasks} removeTask={removeTask} completeTask={completeTask} />}
        {isTasksExist && <Footer changeFilter={changeFilter} amount={tasksCounter} activeFilter={filters} />}
      </div>
    );
  }
}

export default connect(({tasks, filters}) => ({
  tasks,
  filters,
}), { addTask, removeTask, completeTask, changeFilter })(ToDo)