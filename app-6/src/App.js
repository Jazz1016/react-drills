import React from "react";
import "./App.css";
import Todo from "./components/Todo";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputLine: "",
      listArray: []
    };
  }

  handleChange = val => {
    this.setState({ inputLine: val });
  };

  handlePush = val => {
    let newArr = [...this.state.listArray];
    newArr.push(val);
    this.setState({
      listArray: newArr
    });
    console.log(this.state.listArray);
  };

  render() {
    return (
      <h3 className="App">
        <h1>My to-do list:</h1>
        <input onChange={e => this.handleChange(e.target.value)} />
        <button onClick={() => this.handlePush(this.state.inputLine)}>
          Add
        </button>
        {/* <h3 listItems={this.state.listArray}>{listItems}</h3> */}
        <Todo listItems={this.state.listArray} />
      </h3>
    );
  }
}

export default App;
