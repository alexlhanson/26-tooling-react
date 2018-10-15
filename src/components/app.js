'use strict';

import React from 'react';
import {say} from 'cowsay';
import Faker from 'faker';

import '../style/app.scss';
console.log(say({text:'hi there'}));
class App extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      value: null
    };

    this.updateState = this.updateState.bind(this);
  }

  updateState () {
    let fakeText = Faker.fake("{{lorem.paragraph}}");
    console.log(fakeText);
    let value = say({
      text: fakeText,
    });
    this.setState({value}); 
  }

  render(){
    return (
      <React.Fragment>
        <h1>Generate Cowsay Lorem</h1>
        <button onClick={this.updateState}>click me</button>
        <pre>{this.state.value}</pre>
      </React.Fragment>
    )
  }
}

export default App;
