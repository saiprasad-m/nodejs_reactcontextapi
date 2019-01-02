import React, { Component } from 'react';

import './App.css';

const Family = (props) => (
  <div className="family">
    <Person name={props.name}/>
  </div>
)

class Person extends Component {

  render() {
    return (
      <div className="person">
        I am an awesome person {this.props.name}.
      </div>
    )
  }
}

class App extends Component {
  state = {
    name: 'Sai',
    age: 40,
    cool: 'Awesome'
  }
  render() {
    return (
      <div className="App">
        <div class="container card card-body">
          This is an React 16.7 App for React Context API
        </div>
        <Family name={this.state.name}/>
      </div>
    );
  }
}

export default App;
