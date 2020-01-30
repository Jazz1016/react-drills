import React, { Component } from "react";

export default class Todo extends Component {
  render() {
    return <p>{this.props.task}</p>;
  }
}

// import React from "react";

// class Todo extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }

//   render() {
//     return <p>{this.props.task}</p>;
//   }
// }

// export default Todo;
