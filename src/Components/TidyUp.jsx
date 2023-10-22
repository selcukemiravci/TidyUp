import React from 'react';
import bgImg from '../Images/background.png'
import Trophy from './Trophy/Trophy'
import BookStack from './BookStack/BookStack'
import Book from './Book/Book'
import Trash from './Trash/Trash'
import Plant from './Plant/Plant';

class TidyUp extends React.Component {
  render() {
    return <>
        <div className="container">
            <img src={bgImg} alt="room with powder blue walls" />
            <Trash />
            <Book />
            <BookStack />
            <Trophy />
            <Plant />
        </div>

    </>
  }
}

export default TidyUp;
