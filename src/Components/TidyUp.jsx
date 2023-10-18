import React from 'react';
import bgImg from '../Images/background.png'
import Trash from './Trash/Trash'
import Plant from './Plant/Plant';

class TidyUp extends React.Component {
  render() {
    return <>
        <div className="container">
            <img src={bgImg} alt="room with powder blue walls" />
            <Trash />
            <Plant />
        </div>

    </>
  }
}

export default TidyUp;
