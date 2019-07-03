import React, { Component } from 'react';
import './App.css';
import Task from './Task';
import { manageTodo, addTodo } from './actions';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  todo: state.todo
});

const mapDispatchToProps = dispatch => ({
  manageTodo: index => dispatch(manageTodo(index)),
  addTodo: name => dispatch(addTodo(name))
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoName: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  handleChange(e) {
    return e => {
      this.setState({ todoName: e.target.value }, () => console.log(this.state));
    };
  }

  handleAddTodo() {
    if (this.state.todoName !== '') {
      this.props.addTodo(this.state.todoName);
      this.setState({ todoName: '' });
    }
  }

  render() {
    return (
      <div className="App">
        <h1>TODO LIST</h1>
        <table style={{ margin: 'auto' }}>
          <tbody>
            {this.props.todo.todoList.map((task, index) => (
              <Task key={index} task={task} handleCheck={() => this.props.manageTodo(index)} />
            ))}
          </tbody>
        </table>
        <input type="text" value={this.state.todoName} onChange={this.handleChange()} />
        <button onClick={() => this.handleAddTodo()}>Add todo</button>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
