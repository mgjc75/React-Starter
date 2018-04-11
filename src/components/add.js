import React from "react";

class Addtask extends React.Component {
  state = {
    input: ""
  };

  render() {
    return (
      <div className="form-group row">
        <div className="col-md-2">
          <label>Category</label>
          <select className="form-control" id="category">
            <option>Personal</option>
            <option>Work</option>
          </select>
        </div>
        <div className="col-md-4">
          <label>Task</label>
          <input
            type="text"
            className="form-control add-task"
            id="newTask"
            placeholder="Enter new task"
            name="newTask"
            onKeyUp={this.handleKeyUp}
            onChange={this.handleChange}
            value={this.state.input}
          />
        </div>
        <div className="col-md-4 text-bottom">
          <button
            type="submit"
            className="btn btn-default"
            onClick={this.handleClick}
          >
            Submit
          </button>
        </div>
      </div>
    );
  }

  handleChange = event => {
    const inputText = event.target.value;
    this.setState({
      input: inputText
    });
  };

  handleClick = () => {
    const { input } = this.state;
    if (input) this.props.addTask(input);
    this.setState({ input: "" });
  };

  handleKeyUp = event => {
    const { input } = this.state;
    if (event.keyCode === 13 && input) {
      this.props.addTask(event.target.value);
    }
  };
}

export default Addtask;
