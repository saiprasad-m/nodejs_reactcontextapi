import React, { Component } from 'react';

import './App.css';

const FirstContext = React.createContext();

class FirstProvider extends Component {
  state = {
    name: 'Sai',
    projects: 40,
    cool: 'Awesome'
  }
  render() {
    return(
      <FirstContext.Provider value={{
        state: this.state,
        incrementProjects: () => this.setState({
          projects: this.state.projects +1
        }),
        decrementProjects: () => this.setState({
          projects: this.state.projects -1
        })
      }}>
        {this.props.children}
      </FirstContext.Provider>
    )
  }
}

const Family = (props) => (
  <div className="family">
    <Person/>
  </div>
)

class Person extends Component {

  render() {
    return (
      <div className="person">
        <FirstContext.Consumer>
          {
            (context) => (
              <React.Fragment>

              <p>Name: {context.state.name}</p>
              <p>Projects completed: {context.state.projects}</p>
              <p>Coolness Coeffecient: {context.state.cool}</p> <hr/>
              <button onClick={context.incrementProjects} className="sm">+</button>
              <button onClick={context.decrementProjects} className="sm">-</button>
              
              </React.Fragment>
            )
          }
        </FirstContext.Consumer>
      </div>
    )
  }
}

class App extends Component {

  render() {
    return (
      <FirstProvider>
      <div className="App">
        <div class="container card card-body">
          This is an React 16.7 App for React Context API
        </div>
        <Family/>
      </div>
      </FirstProvider>
    );
  }
}

export default App;
