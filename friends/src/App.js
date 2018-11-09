import React, { Component } from 'react';
import logo from './D2rdroid1.png';
import './App.css';

import FriendForm from './components/FriendForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="App-Title">{`D2rd Friend Roster`}</h1>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Let's go David!  Make this happen!
          </p>
          <a
            className="App-link"
            href="http://linkedin.com/in/gddaniel"
            target="_blank"
            rel="noopener noreferrer"
          >
            About David
          </a>
          <FriendForm />
        </header>
      </div>
    );
  }
}

export default App;
