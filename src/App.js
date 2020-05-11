import React, { Component }from 'react';
import './App.css';
import {CardList} from "./Component/card-list/list-component";
import {SearchBox} from "./Component/search-box/search-box-component"


class App extends Component {

  constructor () {
    super();
    this.state = {
      monsters: [],
      searchField: ""  
    }
  }
  componentDidMount() {
    // calling the api for data
    fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(response => response.json())
    .then(users => this.setState({monsters: users}))
  }
  render () {
    // destructuring
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className="App">
         <SearchBox 
         placeholder="search monsters"
         handleChange={event => this.setState({searchField:event.target.value})}/>
        <CardList monsters={filteredMonsters}/>
      </div>
    )
  }
}


export default App;
