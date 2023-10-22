import React from 'react';
import clickWAV from '../../Audio/arcade-jump.wav'
import boxImg from '../../Images/box.png';
import './Box.css'
import { positions, moveBox } from './BoxUtils.js'

class Box extends React.Component
{
  state = {
    pos: {
      x: positions.pos1.x,
      y: positions.pos1.y
    }
  }

  handleOnClick = () => {
    moveBox(this.state.pos, this.setState.bind(this));
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
            src={boxImg}
            alt="box on bottom shelf of bookcase"
            className="box"
            style={styles}
            onClick={this.handleOnClick}/>
    </>
  }
}

export default Box;