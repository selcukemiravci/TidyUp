import React from 'react';
import clickWAV from '../../Audio/arcade-jump.wav'
import matImg from '../../Images/mat.png';
import './Mat.css'
import { positions, rotateMat } from './MatUtils'

class Mat extends React.Component
{
  state = {
    rotation: positions.pos1,
  }

  handleOnClick = () => {
    rotateMat(this.state.rotation, this.setState.bind(this));
  }

  render() {
    const styles = {
      position: 'absolute',
      top: 945,
      left: 145,
    }
    return <>
        <audio id="clickWAV">
            <source src={clickWAV} type="audio/wav" />
            Your browser does not support the audio element.
        </audio>
        <img
            id="mat"
            src={matImg}
            alt="striped mat laying crooked on the floor"
            className="mat rotate-90"
            style={styles}
            onClick={this.handleOnClick}/>
    </>
  }
}

export default Mat;