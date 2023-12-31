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
import Unlocked from './Unlocked/Unlocked'

import { correctBookPosition } from './Book/BookUtils';
import { correctBookStackPosition } from './BookStack/BookStackUtils';
import { correctBoxPosition } from './Box/BoxUtils';
import { correctMatPosition } from './Mat/MatUtils';
import { correctPlantPosition } from './Plant/PlantUtils';
import { correctTrashFill } from './Trash/TrashUtils';
import { correctTrophyPosition } from './Trophy/TrophyUtils'; 

class TidyUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      unlocked: false,
    };
  }

  // FORGIVE ME FOR MY NON-OPTIMAL SOLUTION
  checkForUnlock = () => {
    const interval = setInterval(() => {
      if (correctBookPosition && correctBookStackPosition && correctBoxPosition && correctMatPosition && correctPlantPosition && correctTrashFill && correctTrophyPosition) {
        clearInterval(interval);
        this.setState({ unlocked: true });
      }
    }, 100);
  };

  render() {
    return <>
        { this.state.unlocked === false ? ( 
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
              { this.checkForUnlock() }
          </div>) : <Unlocked />
        }
    </>
  }
}

export default TidyUp;
