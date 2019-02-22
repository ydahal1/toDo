import React, { Component } from "react";
//Test funtions
// const student = {
//   name: "Yadhap Dahl",
//   screamName() {
//     alert(this.name);
//   }
// };

// const test = student.screamName.bind(student);
// test();

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

class AddToDo extends Component {
  //handle add to do
  handleSubmit(e) {
    e.preventDefault();
    const userInput = e.target.option.value.trim();
    if (userInput) {
      console.log(userInput);
    }
  }

  state = {};
  render() {
    return (
      <div style={addToDoDIV}>
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
                  &nbsp;&nbsp;&nbsp;&nbsp;+&nbsp;&nbsp;&nbsp;&nbsp;
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
