import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="header">
          <h1>Alexa Rae Schreffler</h1>
        </div>
        <div className="intro">
          <p>This is a functional-ass website.</p>
          <p>I am an Austin, TX based front end developer who really, really likes React.</p> 
          <p>I try to keep my <a target="_blank" href="http://www.github.com/alexaraes">Github profile</a> active, say some stuff on my <a target="_blank" href="http://awrecksa.tumblr.com">Tumblr</a>, or post gifs on <a target="_blank" href="http://www.twitter.com/awrecksa">Twitter</a>.</p>
        </div>
      </div>
    );
  }
}

export default App;
