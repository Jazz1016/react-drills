import React from "react";

class ImageComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(this.props.imageProp);
    return this.props.imageProp;
  }
}

export default ImageComponent;
