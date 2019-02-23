import React, { Component } from "react";
const btnDiv = {
  margin: "40px",
  marginBottom: "-20px",
  marginRight: "280px",
  marginLeft: "280px",
  textAlign: "center"
};

const jumbotron = {
  paddingTop: "30px",
  paddingBottom: "30px"
};
class Actions extends Component {
  state = {};
  render() {
    return (
      <div style={btnDiv}>
        <div className="jumbotron" style={jumbotron}>
          <h1 onClick={this.props.picTask}>What should I do ?</h1>
        </div>
      </div>
    );
  }
}

export default Actions;
