import React from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  handleUser = val => {
    this.setState({ username: val });
  };

  handlePass = val => {
    this.setState({ password: val });
  };

  handleAlert(val) {
    alert(`${this.state.username} ${this.state.password}`);
  }

  render() {
    return (
      <div className="App">
        <input onChange={e => this.handleUser(e.target.value)} />
        <input onChange={e => this.handlePass(e.target.value)} />
        <button onClick={e => this.handleAlert(e.target.value)}>Login</button>
      </div>
    );
  }
}

export default App;
