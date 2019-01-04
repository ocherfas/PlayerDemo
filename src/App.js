import React, { Component } from 'react';
import Player from './Player.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <Player mediaFile={'https://storage.googleapis.com/media-session/elephants-dream/the-wires.mp3'}
              events={[
                {name: 'event1', offset: 4},
                {name: 'event2', offset: 50},
                {name: 'event3', offset: 50},
                {name: 'event4', offset: 40},
                {name: 'event5', offset: 50},
                {name: 'event6', offset: 50},
                {name: 'event7', offset: 50},
                {name: 'event8', offset: 50},
                {name: 'event9', offset: 30},
                {name: 'event10', offset: 200}
              ]}
              width='700px'
      />
    );
  }
}

export default App;
