import React, { Component } from "react";
import Header from "./components/header";
import Actions from "./components/action";
import Options from "./components/options";
import AddToDo from "./components/addToDo";
import "./App.css";

const appData = {
  header: {
    heading: "Get your things done",
    subHeading: ".... ... .. . Without missing any"
  },
  options: ["Get groceries", "Pay phone bills", "Cook rice"]
};

class App extends Component {
  render() {
    return (
      <div>
        <Header headerData={appData.header} />
        <Actions />
        <Options optionsData={appData.options} />
        <AddToDo />
      </div>
    );
  }
}

export default App;
