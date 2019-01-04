import React, {Component} from 'react';
import ReactPlayer from 'react-player';
import './player.css';
import PropTypes from 'prop-types';

class Player extends Component {

  constructor(props) {
    super(props);

    this.state = {
      playing: false,
      playedFraction: 0
    };
  }

  seekTo = (offset) => {
    this.player.seekTo(offset);
  };

  playPause = () => {
    this.setState({
      playing: !this.state.playing
    });
  };

  onFractionChange = (playedFraction) => {
    this.setState({
      playedFraction: playedFraction
    });
  };

  render() {
    const {events, mediaFile, width} = this.props;
    const {playing, playedFraction} = this.state;

    const eventsElements = events.map(({name, offset}, key) => {
      return <div key={key} onClick={() => this.seekTo(offset)} className='event'>
        {name}
      </div>;
    });

    return (
      <div style={{width: width || '100%'}}>
        <ReactPlayer url={mediaFile}
                     ref={(ref) => this.player = ref}
                     playing={playing}
                     onProgress={({played}) => this.onFractionChange(played)}
                     width={0}
                     height={0}
        />
        <progress value={playedFraction} max={1} className='progress-bar'/>
        <div className='controllers-wrapper'>
          <button className='play-pause' onClick={this.playPause}>{playing ? 'Pause' : 'Play'}</button>
          <div className="events">{eventsElements}</div>
        </div>
      </div>
    );
  }
}

Player.propTypes = {
  width: PropTypes.string,
  mediaFile: PropTypes.string,
  events: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    offset: PropTypes.number
  }))
};

export default Player;
