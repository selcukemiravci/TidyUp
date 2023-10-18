import React from 'react';
import Plant from './Plant';
import bgImg from '../Images/background.png'

class TidyUp extends React.Component {
  render() {
    return <>
        <div className="container">
            <img src={bgImg} alt="room with powder blue walls" />
            <Plant />
        </div>

    </>
  }
}

export default TidyUp;
