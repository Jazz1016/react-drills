import React from "react";
import "./App.css";
import ImageComponent from "./components/ImageComponent";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: (
        <img
          src="https://www.thesprucepets.com/thmb/kWoBM1Szmq0-LBEkVrpkbEawA6I=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/close-up-of-ginger-cat-730290907-5b9aed3a46e0fb0025fc73ab.jpg"
          alt="cat"
        />
      )
    };
  }

  render() {
    return (
      <div>
        <ImageComponent imageProp={this.state.image} />
      </div>
    );
  }
}

export default App;
