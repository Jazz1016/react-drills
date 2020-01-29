import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { render } from "@testing-library/react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputLine: ""
    };
  }

  handleChange = val => {
    console.log(val);
    this.setState({ inputLine: val });
  };

  render() {
    return (
      <div className="App">
        <input onChange={e => this.handleChange(e.target.value)} />
        <p>{this.state.inputLine}</p>
      </div>
    );
  }
}

export default App;
