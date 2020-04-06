import React, { Component }from 'react';
import './App.css';

class App extends Component {

  constructor () {
    super();
    this.state = {
      string: "Hello and Welcome Again"
    }
  }
  render () {
    return (
      <div className="App">
        <header className="App-header">
         <p>{this.state.string}</p>
          <button onClick={() => this.setState({string: "Hello Paul Welcome"})}>Change your State</button>
        </header>
      </div>
    )
  }
}


export default App;
