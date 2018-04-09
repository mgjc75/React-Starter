import React from "react";

class Addtask extends React.Component {
  state = {
    input: ""
  };

  render() {
    return (
      <div className="well well-sm well-info form-inline">
        <div className="form-group">
          <label htmlFor="task">New Task</label>
          <input
            type="text"
            className="form-control"
            id="newTask"
            onKeyUp={this.handleKeyUp}
            onChange={this.handleChange}
            value={this.state.input}
          />
          <button
            type="submit"
            className="btn btn-info"
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
