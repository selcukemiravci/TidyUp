import React from 'react';
import unlockedHomeScreen from '../../Images/unlocked-home-screen.png';

class Unlocked extends React.Component
{
  render() {
    const styles = {
      position: 'absolute',

    }
    return <>
        <img
            src={unlockedHomeScreen}
            alt="unlocked mobile home screen"
            className="unlocked"
            style={styles}/>
    </>
  }
}

export default Unlocked;