import React from 'react';
import plantPNG from '../Images/plant.png';
import './Plant.css'
import { positions, movePlant } from './PlantUtils.js'

class Plant extends React.Component
{
  state = {
    pos: {
      x: positions.pos1.x,
      y: positions.pos1.y
    }
  }

  handleOnClick = () => {
    movePlant(this.state.pos, this.setState.bind(this));
  }

  render() {
    const styles = {
      position: 'absolute',
      top: this.state.pos.y,
      left: this.state.pos.x,
    }
    return <img src={plantPNG} alt="potted plant" className="plant" style={styles} onClick={this.handleOnClick}/>
  }
}

export default Plant;