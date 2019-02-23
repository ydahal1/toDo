import React, { Component } from "react";
import Header from "./components/header";
import Actions from "./components/action";
import Options from "./components/options";
import AddToDo from "./components/addToDo";
import Option from "./components/option";
import "./App.css";

const appData = {
  header: {
    heading: "Get your things done",
    subHeading: ".... ... .. . Without missing any"
  }
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [],
      error: ""
    };
    this.handlDelete = this.handlDelete.bind(this);
    this.handleNewEntry = this.handleNewEntry.bind(this);
    this.pickTask = this.pickTask.bind(this);
    this.handleErrors = this.handleErrors.bind(this);
  }

  //Handle delete options
  handlDelete() {
    this.setState(() => {
      return {
        options: []
      };
    });
  }

  //Pick a random task
  pickTask() {
    const randomTaskNumber = Math.floor(
      Math.random() * Math.floor(this.state.options.length)
    );
    this.state.options.length > 0
      ? alert(this.state.options[randomTaskNumber])
      : alert("There are no tasks");
  }

  //Handle new entry
  handleNewEntry(newTask) {
    this.setState(previousState => {
      return {
        options: previousState.options.concat([newTask])
      };
    });
  }

  //Handle errors
  handleErrors(err) {
    this.setState(() => {
      return {
        error: err
      };
    });
  }

  render() {
    return (
      <div>
        <Header headerData={appData.header} />
        <Actions picTask={this.pickTask} />
        <Options
          hasOptions={this.state.options.length > 0 ? true : false}
          optionsData={this.state.options}
          handlDeleteOptions={this.handlDelete}
          optionsDataCount={this.state.options.length}
        />
        <AddToDo
          handleNewTask={this.handleNewEntry}
          optionsData={this.state.options}
          handleErr={this.handleErrors}
          errorData={this.state.error}
          selectedTask={this.state.selectedTask}
        />
        <Option selectedTask={this.state.selectedTask} />
      </div>
    );
  }
}

export default App;
