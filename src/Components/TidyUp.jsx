import React from 'react';
import bgImg from '../Images/background.png'
import Trophy from './Trophy/Trophy'
import BookStack from './BookStack/BookStack'
import Book from './Book/Book'
import Trash from './Trash/Trash'
import Mat from './Mat/Mat'
import Plant from './Plant/Plant'
import Box from './Box/Box'
import Clock from './Clock/Clock'

class TidyUp extends React.Component {
  render() {
    return <>
        <div className="container">
            <img src={bgImg} alt="room with powder blue walls" />
            <Clock/>
            <Trash />
            <Box />
            <Book />
            <BookStack />
            <Trophy />
            <Mat />
            <Plant />
        </div>

    </>
  }
}

export default TidyUp;
