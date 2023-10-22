import React from 'react';
import clickWAV from '../../Audio/arcade-jump.wav'
import bookImg from '../../Images/book.png';
import './Book.css'
import { positions, rotateBook } from './BookUtils'

class Book extends React.Component
{
  state = {
    rotation: positions.pos1,
  }

  handleOnClick = () => {
    rotateBook(this.state.rotation, this.setState.bind(this));
  }

  render() {
    const styles = {
      position: 'absolute',
      top: 645,
      left: 515,
    }
    return <>
        <audio id="clickWAV">
            <source src={clickWAV} type="audio/wav" />
            Your browser does not support the audio element.
        </audio>
        <img
            id="green-book"
            src={bookImg}
            alt="book laying flat on third shelf of bookcase"
            className="book"
            style={styles}
            onClick={this.handleOnClick}/>
    </>
  }
}

export default Book;