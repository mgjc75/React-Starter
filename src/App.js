import React from "react";
import Heading from "./components/heading";
import Checklist from "./components/list";
import Addtask from "./components/add";

class App extends React.Component {
  state = {
    todos: [
      { text: "Water Plants", completed: false },
      { text: "Feed Python", completed: false },
      { text: "Learn Python", completed: false }
    ]
  };
  render() {
    const { todos } = this.state;
    return (
      <div id="container">
        <div className="panel panel-info">
          <div className="panel-heading">
            <Heading name="Mark" />
          </div>
          <div className="panel-body">
            <Addtask addTask={this.addTask} />
            <Checklist
              todos={todos}
              removeTask={this.removeTask}
              toggleCompleteTask={this.toggleCompleteTask}
            />
          </div>
        </div>
      </div>
    );
  }

  removeTask = taskToRemove => {
    this.setState({
      todos: this.state.todos.filter(task => {
        return task !== taskToRemove;
      })
    });
  };

  toggleCompleteTask = taskToComplete => {
    this.setState({
      todos: this.state.todos.map(task => {
        if (task === taskToComplete) {
          const newTask = { ...task, completed: !task.completed };
          return newTask;
        }
        return task;
      })
    });
  };

  addTask = taskToAdd => {
    const newTask = {
      text: taskToAdd,
      completed: false
    };
    const taskLength = this.state.todos.filter(task => {
      return task.text === taskToAdd;
    }).length;
    if (taskLength === 0) {
      this.setState({ todos: [newTask, ...this.state.todos] });
    }
  };
}

export default App;
