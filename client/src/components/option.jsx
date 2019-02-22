import React, { Component } from "react";

const optionStyle = {
  paddingTop: "10px",
  paddingBottom: "10px"
};
class Option extends Component {
  state = {};
  render() {
    return <div style={optionStyle}>{this.props.taskOption}</div>;
  }
}

export default Option;
