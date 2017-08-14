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
          <p>I am an Austin, TX based front end developer who really, really likes React.</p> 
          <p>I try to keep my <a target="_blank" href="http://www.github.com/alexaraes">Github profile</a> active, say some stuff on my <a target="_blank" href="http://awrecksa.tumblr.com">Tumblr</a>, or post gifs on <a target="_blank" href="http://www.twitter.com/awrecksa">Twitter</a>.</p>
        </div>
        <div className="intro">
          <h3>Nice Things People Have Said About Me</h3>
          <p className="niceThing">Alexa's dedication to self improvement is the characteristic that has most impressed me. It was a pleasure to interact with Alexa as a student of mine while she was learning front-end development at The Iron Yard and I've be constantly impressed with how far she's come since then. Alexa excels at breaking down complicated technical problems and figuring out how to solve them while keeping a close eye on code quality. Any company would be lucky to have her on their development team.</p>
          <p>-Aaron Larner, former instructor at the Iron Yard and member of technical staff at Trello</p>
          <br />
          <p className="niceThing">Alexa showed tremendous growth in code quality and quantity; raising the bar for others . A developer who loves to develop, Alexa had no fear jumping in to try a hand at something new. If given the opportunity, this developer can meet any challenge and will be sorely missed.</p>
          <p>Trey Jones, Senior Developer Buzz Points, Inc</p>
        </div>
      </div>
    );
  }
}

export default App;
