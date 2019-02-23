import React, { Component } from "react";
import Option from "./option";

const optionsDiv = {
  marginRight: "280px",
  marginLeft: "280px",
  textAlign: "center"
};

const clearToDoStyles = {
  marginTop: "0px",
  marginBottom: "14px",
  backgroundColor: "red",
  border: "0.5px solid gray",
  color: "white",
  fontSize: "18px"
};

class Options extends Component {
  state = {};
  render() {
    return (
      <div style={optionsDiv}>
        <button
          style={clearToDoStyles}
          type="button"
          className="btn  btn-sm btn-block"
          onClick={this.props.handlDeleteOptions}
          hidden={!this.props.hasOptions}
        >
          Clear all TO DOs
        </button>
        {this.props.optionsData.map(option => {
          return (
            <div>
              <Option
                key={option}
                taskOption={option}
                optionData={this.props.optionsData}
              />
            </div>
          );
        })}
        <Option />
      </div>
    );
  }
}

export default Options;
