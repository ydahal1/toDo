import React, { Component } from "react";
const navBar = {
  color: "white",
  padding: "15px"
};
class Header extends Component {
  state = {};
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-dark" style={navBar}>
          <h2> {this.props.headerData.heading} </h2>
          <h4> {this.props.headerData.subHeading}</h4>
        </nav>
      </div>
    );
  }
}

export default Header;
