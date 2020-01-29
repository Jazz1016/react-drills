import React from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      array: ["spaghetti", "ice cream", "sushi", "bologna", "cheese"]
    };
  }

  render() {
    return (
      <div className="App">
        <h2>{this.state.array[0]}</h2>
        <h2>{this.state.array[1]}</h2>
        <h2>{this.state.array[2]}</h2>
        <h2>{this.state.array[3]}</h2>
        <h2>{this.state.array[4]}</h2>
      </div>
    );
    // let foodsToDisplay = this.state.foods.map((element, index) => {
    //   return <h2 key={index}>{element}</h2>;
    // });

    // return <div className="App">{foodsToDisplay}</div>;
  }
}

export default App;
