import React from "react";
import Heading from "./components/heading";
import Checklist from "./components/list";
import Addtask from "./components/add";
import Savetask from "./components/save";
import "./css/add.css";

class App extends React.Component {
  state = {
    tasks: [
      { text: "Water Plants", completed: false, category: "personal" },
      { text: "Feed Python", completed: false, category: "personal" },
      { text: "Learn Python", completed: false, category: "personal" },
      { text: "complete checklist", completed: false, category: "work" },
      { text: "fix bugs", completed: false, category: "work" },
      { text: "get drunk", completed: false, category: "work" }
    ]
  };

  render() {
    const { tasks } = this.state;
    return (
      <div id="container">
        <div className="panel panel-info">
          <div className="panel-heading">
            <Heading name="Mark" />
          </div>
          <div className="panel-body">
            <div className="row">
              <div className="col-md-11">
                <Addtask addTask={this.addTask} />
              </div>
              <div className="col-md-1 text-right">
                <Savetask />
              </div>
            </div>
            <Checklist
              tasks={tasks}
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
      tasks: this.state.tasks.filter(task => {
        return task !== taskToRemove;
      })
    });
  };

  toggleCompleteTask = taskToComplete => {
    this.setState({
      tasks: this.state.tasks.map(task => {
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
    const taskLength = this.state.tasks.filter(task => {
      return task.text === taskToAdd;
    }).length;
    if (taskLength === 0) {
      this.setState({ tasks: [newTask, ...this.state.tasks] });
    }
  };

  saveTask({ stateData }) {
    localStorage.setItem("data", JSON.stringify(stateData));
  }
}

export default App;
