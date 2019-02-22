import React, { Component } from "react";
import Option from "./option";

const optionsDiv = {
  marginRight: "280px",
  marginLeft: "280px",
  textAlign: "center"
};

const clearToDoStyles = {
  marginTop: "0px",
  marginBottom: "14px"
};

class Options extends Component {
  //Constructor
  constructor(props) {
    super(props);
    this.handleClear = this.handleClear.bind(this);
  }
  //Handle clear the list
  handleClear(e) {
    e.preventDefault();
    // alert("Clear all to do lists");
    alert(this.props.optionsData);
  }
  state = {};
  render() {
    return (
      <div style={optionsDiv}>
        <button
          style={clearToDoStyles}
          type="button"
          className="btn btn-primary btn-danger btn-block btn-lg"
          onClick={this.handleClear}
        >
          Clear all TO DOs
        </button>
        {this.props.optionsData.map(option => {
          return <Option key={option} taskOption={option} />;
        })}
        <Option />
      </div>
    );
  }
}

export default Options;
