import React, { Component } from "react";

//CSS styling
const addToDoDIV = {
  marginTop: "10px",
  marginRight: "280px",
  marginLeft: "280px",
  textAlign: "center"
};

const addBtnStyle = {
  backgroundColor: "limegreen",
  color: "white",
  fontWeight: "bold",
  border: "1px solid gray"
};

const errDataSytle = {
  color: "red",
  fontSize: "10px"
};

class AddToDo extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const userInput = e.target.option.value.trim();
    if (!userInput) {
      const err = "Please enter a task";
      this.props.handleErr(err);
      return;
    } else if (userInput.length < 2) {
      const err = "Task too short";
      this.props.handleErr(err);
      return;
    } else if (this.props.optionsData.indexOf(userInput) !== -1) {
      const err = "This task already exists";
      this.props.handleErr(err);
      return;
    } else {
      this.props.handleNewTask(userInput);
    }
  }

  state = {};
  render() {
    return (
      <div style={addToDoDIV}>
        <div style={errDataSytle}>{this.props.errorData}</div>
        <form onSubmit={this.handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Add a new TO DO"
              aria-label="new todo input"
              aria-describedby="basic-addon2"
              name="option"
            />
            <div className="input-group-append">
              <span>
                <button
                  style={addBtnStyle}
                  className="input-group-text"
                  id="basic-addon2"
                  type="submit"
                >
                  &nbsp;&nbsp;&nbsp;&nbsp;Add a Task&nbsp;&nbsp;&nbsp;&nbsp;
                </button>
              </span>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default AddToDo;
