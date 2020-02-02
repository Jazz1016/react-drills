import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import NewTask from "./components/NewTask";
import List from "./components/List";

class App extends Component {
  constructor() {
    super();

    this.state = {
      list: []
    };

    this.handleAddTask = this.handleAddTask.bind(this);
  }

  handleAddTask(task) {
    console.log(task);
    this.setState({ list: [...this.state.list, task] });
  }

  // handlePopper() {
  //   let popArr = [...this.state.list];
  //   popArr.pop();
  //   console.log(popArr);
  //   return popArr;
  // }

  render() {
    return (
      <div className="App">
        <h1>My to-do list:</h1>
        <NewTask add={this.handleAddTask} />
        <List tasks={this.state.list} />
      </div>
    );
  }
}

export default App;

// import React, { Component } from "react";
// import "./App.css";
// import Todo from "./components/Todo";
// import NewTask from "./components/NewTask";
// import List from "./components/List";

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       taskArray: []
//     };
//   }

//   handleAddTask = task => {
//     this.setState({ taskArray: [...this.state.taskArray, task] });
//   };

//   render() {
//     return (
//       <div className="App">
//         <h1>My to-do list:</h1>
//         <NewTask add={this.handleAddTask} />
//         <List tasks={this.state.taskArray} />
//       </div>
//     );
//   }
// }
// export default App;

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       listArray: []
//     };
//   }

//   handleChange = val => {
//     this.setState({ inputLine: val });
//   };

//   handlePush = val => {
//     let newArr = [...this.state.listArray];
//     newArr.push(val);
//     this.setState({
//       listArray: newArr
//     });
//     console.log(this.state.listArray);
//   };

//   render() {
//     return (
//       <h3 className="App">
//         <h1>My to-do list:</h1>
//         <NewTask inputLine={this.state.inputLine} />
//         <input onChange={e => this.handleChange(e.target.value)} />
//         <button onClick={() => this.handlePush(this.state.inputLine)}>
//           Add
//         </button>
//         {/* <h3 listItems={this.state.listArray}>{listItems}</h3> */}
//         <Todo listItems={this.state.listArray} />
//       </h3>
//     );
//   }
// }

// export default App;
