import React, { Component } from 'react';
import './App.css';

import {PONY_NAMES} from '../constants/constants'
import {URL} from '../constants/constants'

class App extends Component {
  constructor(props) {
    super(props)
    this.state={
      pony: undefined,
      mazeId: undefined,
      difficulty: 0
    }
  }

  componentDidMount = () => {
    const ponyName = PONY_NAMES[Math.floor((Math.random() * PONY_NAMES.length))];
    const params = {
      "maze-width": 15,
      "maze-height": 25,
      "maze-player-name": ponyName,
      "difficulty": this.state.difficulty
    };

    // let url = URL + "/pony-challenge/maze";

    this.postData(URL, params)
    .then(data => this.setState({ pony: ponyName, mazeId: data.maze_id })) // JSON-string from `response.json()` call
    .catch(error => console.error(error));

  }

  postData = (url = ``, data = {}) => {
    return fetch(url, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, cors, *same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data), // body data type must match "Content-Type" header
    })
    .then(response => response.json()) // parses response to JSON
  }

  getData = (mazeId) => {

  }

  render() {
    console.log(this.state.mazeId)
    console.log(this.state.pony)
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </header>
      </div>
    );
  }
}

export default App;
