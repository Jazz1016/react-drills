export default class List extends Component {
  render() {
    let list = this.props.tasks.map((element, index) => {
      return <Todo key={index} task={element} />;
    });

    return <div>{list}</div>;
  }
}

import React from "react";
import Todo from "./Todo";

class List extends React.Component {
  constructor(props) {
    super();
    this.state = {};
  }

  render() {
    let list = this.props.tasks.map((element, index) => {
      return <Todo key={index} task={element} />;
    });
    return <div>{list}</div>;
  }
}

export default List;

// import React from "react";
// import Todo from "./Todo";
// function List(props) {
//   let list = props.tasks.map((elm, index) => {
//     return <Todo key={index} item={elm} />;
//   });
//   return <div>{list}</div>;
// }
// export default List;

// import React, { Component } from "react";
// import Todo from "./Todo";
