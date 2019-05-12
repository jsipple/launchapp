  import React, { Component, Fragment } from 'react';
  import 'bootstrap/dist/css/bootstrap.css';
  import '../articles/Articles.js;'

constructor(props) {
  super(props);
  this.state = {
    imageURL: '',
  }
}
//making get request, using dog as an example only a test
componentDidMount() {
    axios.get('https://dog.ceo/api/breeds/image/random')
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.log(error);
    });
  }

   render() {
    const { imageURL } = this.state;
    return (
      <img src={imageURL} />
   );
  }

    