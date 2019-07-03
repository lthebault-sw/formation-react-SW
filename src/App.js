import React, { Component } from 'react';
import './App.css';
import Task from './Task';
import { manageTodo } from './actions';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  todo: state.todo
});

const mapDispatchToProps = dispatch => ({
  manageTodo: index => dispatch(manageTodo(index))
});

class App extends Component {
  constructor(props) {
    super(props);
    this.handleCheckTask = this.handleCheckTask.bind(this);
  }

  handleCheckTask(index) {
    return e => {
      this.props.manageTodo(index);
    };
  }

  render() {
    return (
      <div className="App">
        <h1>TODO LIST</h1>
        <table style={{ margin: 'auto' }}>
          <tbody>
            {this.props.todo.todoList.map((task, index) => (
              <Task key={index} task={task} handleCheck={this.handleCheckTask(index)} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
