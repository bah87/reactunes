import React from 'react';

class SongPlay extends React.Component {
	constructor(props) {
  	super(props);
    this.state = {
    	playing: false,
      paused: false,
      audio: new Audio(this.props.song.previewUrl)
    };

    this.state.audio.loop = true;
    this.handleClick = this.handleClick.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.pauseAndRestart = this.pauseAndRestart.bind(this);
    this.handlePlay = this.handlePlay.bind(this);
  }

  componentWillReceiveProps(newProps) {
  	if (newProps.song.previewUrl !== this.props.song.previewUrl) {
    	this.setState({ audio: new Audio(newProps.song.previewUrl) });
    }
  }

  pauseAndRestart() {
  	this.state.audio.pause();
    this.state.audio.currentTime = 0;
    document.removeEventListener('click', this.handleClickOutside, false);
  }

  handlePlay() {
  	this.state.audio.play();
    document.addEventListener('click', this.handleClickOutside, false);
  }

  handleClickOutside(event) {
  	if (this.node.contains(event.target)) {
      return;
    }
    this.handleClick();
  }

  handleClick() {
  	if (this.state.playing) {
    	this.setState(
      	{ playing: false, paused: false },
        this.pauseAndRestart
      );
    } else {
    	this.setState(
      	{ playing: true, paused: false },
        this.handlePlay
      );
    }
  }

  render() {
    const iconText = this.state.playing ? "pause" : "play";
    let num;
    if (!this.state.playing && !this.state.paused) {
    	num = <div className="song-num-hidden">{ this.props.number }</div>;
    }

    return (
    	<td className="song-number">
        { num }
        <i
          ref={node => { this.node = node; }}
          onClick={ this.handleClick }
          className={ `far fa-${iconText}-circle` }>
        </i>
      </td>
    );
  }
}

export default SongPlay;
