import React from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputLine: "",
      array: [
        "macaroni",
        "snap pees",
        "pizza",
        "cake",
        "tacos",
        "taco shop",
        "wings"
      ]
    };
  }

  handleChange = val => {
    this.setState({ inputLine: val });
  };

  render() {
    let found = this.state.array
      .filter((e, i, arr) => {
        return e.includes(this.state.inputLine);
      })
      .map((element, index) => {
        return <h2 key={index}>{element}</h2>;
      });
    return (
      <div className="App">
        <input onChange={e => this.handleChange(e.target.value)} />
        {found}
      </div>
    );
  }
}

export default App;
