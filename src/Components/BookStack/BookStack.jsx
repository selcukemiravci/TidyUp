import React from 'react';
import clickWAV from '../../Audio/arcade-jump.wav'
import bookStackImg from '../../Images/books.png';
import './BookStack.css'
import { positions, moveBooks } from './BookStackUtils.js'

class BookStack extends React.Component
{
  state = {
    pos: {
      x: positions.pos1.x,
      y: positions.pos1.y
    }
  }

  handleOnClick = () => {
    moveBooks(this.state.pos, this.setState.bind(this));
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
            src={bookStackImg}
            alt="books on first shelf of bookcase"
            className="books"
            style={styles}
            onClick={this.handleOnClick}/>
    </>
  }
}

export default BookStack;