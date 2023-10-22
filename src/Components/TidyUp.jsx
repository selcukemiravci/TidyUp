import React from 'react';
import bgImg from '../Images/background.png'
import Trophy from './Trophy/Trophy'
import Clock from './Clock/Clock';
// ... other imports

class TidyUp extends React.Component {
  state = {
    trophyPosition: { x: 100, y: 100 },  // Initial position
    isUnlocked: false,
    // ... other item positions
  }

  handleTrophyMove = (position) => {
    this.setState({ trophyPosition: position });

    // Check if the trophy is in the tidy position
    if (position.x === 300 && position.y === 300) {
      this.setState({ isUnlocked: true });
      // Trigger transition or animation to the next screen
      setTimeout(() => {
        alert('Device Unlocked! Transitioning to the next screen...');
        // Here, you can change the state or navigate to another page
      }, 1000);  // 1-second delay for demonstration
    }
  }

  render() {
    return (
      <div className="mainContainer">
        <Clock />
        {this.state.isUnlocked ? 
          <div className="fakePhoneScreen">Home Screen</div> : 
          <div className="container">
            <img src={bgImg} alt="room with powder blue walls" />
            <Trophy position={this.state.trophyPosition} onMove={this.handleTrophyMove} />
            {/* other items */}
          </div>
        }
      </div>
    );
}
}

export default TidyUp;
