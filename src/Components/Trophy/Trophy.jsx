import React from 'react';
import clickWAV from '../../Audio/arcade-jump.wav'
import trophyImg from '../../Images/trophy.png';
import './Trophy.css'
import { positions, moveTrophy } from './TrophyUtils.js'

class Trophy extends React.Component
{
  state = {
    pos: {
      x: positions.pos1.x,
      y: positions.pos1.y
    }
  }

  handleOnClick = () => {
    moveTrophy(this.state.pos, this.setState.bind(this));
  }

  render() {
    const styles = {
      position: 'absolute',
      top: this.state.pos.y,
      left: this.state.pos.x,
    }
    return <>
        <audio id="clickWAV">
            <source src={clickWAV} type="audio/wav" />
            Your browser does not support the audio element.
        </audio>
        <img
            src={trophyImg}
            alt="golden trophy on top of bookcase"
            className="trophy"
            style={styles}
            onClick={this.handleOnClick}/>
    </>
  }
}

export default Trophy;