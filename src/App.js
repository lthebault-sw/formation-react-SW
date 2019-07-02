import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Task from './Task';

const tasks = [
  { name: 'Learn React', done: false },
  { name: 'Learn CSS', done: true },
  { name: 'Web development', done: true }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { tasks };
    this.handleCheckTask = this.handleCheckTask.bind(this);
  }

  handleCheckTask(task, index) {
    return e => {
      const newState = this.state;
      newState.tasks[index].done = !task.done;
      this.setState(newState);
    };
  }

  render() {
    return (
      <div className="App">
        <h1>TODO LIST</h1>
        <table style={{ margin: 'auto' }}>
          <tbody>
            {tasks.map((task, index) => (
              <Task key={index} task={task} handleCheck={this.handleCheckTask(task, index)} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
