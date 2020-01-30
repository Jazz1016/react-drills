import React, { Component } from "react";

class NewTask extends Component {
  constructor() {
    super();
    this.state = {
      input: ""
    };

    this.handleAdd = this.handleAdd.bind(this);
  }

  handleInputChange(value) {
    console.log(value);
    this.setState({ input: value });
  }

  handleAdd() {
    this.props.add(this.state.input);
    this.setState({ input: "" });
  }

  render() {
    return (
      <div>
        <input
          value={this.state.input}
          placeholder="Enter new task"
          onChange={e => this.handleInputChange(e.target.value)}
        />

        <button onClick={this.handleAdd}>Add</button>
      </div>
    );
  }
}

export default NewTask;

// import React from "react";

// class NewTask extends React.Component {
//   constructor(props) {
//     super();
//     this.state = {
//       inputLine: ""
//     };
//   }

//   handleChange = val => {
//     this.setState({ inputLine: val });
//   };

//   handlePush = val => {
//     this.props.add(this.state.inputLine);
//     this.setState({ input: "" });
//   };

//   render() {
//     return (
//       <div>
//         <input
//           value={this.state.input}
//           placeholder="Enter new task"
//           onChange={e => this.handleChange(e.target.value)}
//         />
//         <button onClick={this.handleAdd}></button>
//       </div>
//     );
//   }
// }

// export default NewTask;
