import React from "react";
import axios from "axios";

import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {},
      starships: {}
    };
  }

  componentDidMount() {
    axios
      .get("https://swapi.co/api/people/4")
      .then(response => this.setState({ person: response.data }));
  }

  handleGetStarships() {
    axios.get(`https://swapi.co/api/people/4/starships`).then(response => {
      this.setState({ starships: response });
    });
  }
  // handleGetChar(id) {
  //   axios
  //     .get(`https://swapi.co/api/people/${id}`)
  //     .then(response => this.setState({ person: response.data }));
  // }

  // getGrowlitheAbilities(index) {
  //   axios.get("https://pokeapi.co/api/v2/pokemon/growlithe").then(response => {
  //     this.setState({ abilities: response.data });
  //   });
  // }

  render() {
    // const { abilities, moves, stats, types, weight } = this.state.growlithe;
    // let abilityList =
    console.log(this.state.person);
    // console.log(this.state.person.starships[0]);
    return (
      <div className="App">
        <p>Name: {this.state.person.name}</p>
        <p>Birth Year: {this.state.person.birth_year}</p>
        <p>Gender: {this.state.person.gender}</p>
        <p>Eye Color: {this.state.person.eye_color}</p>
        {/* <p>{this.state.person.starships[0]}</p> */}
        <p></p>
        <p></p>
      </div>
    );
  }
}

export default App;
