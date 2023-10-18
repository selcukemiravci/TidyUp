import React from 'react';
import clickWAV from '../../Audio/arcade-jump.wav'
import binPng from '../../Images/empty-trash.png';
import rubbishPng from '../../Images/trash.png';
import { emptyTrash } from './TrashUtils'

import './Trash.css'

class Trash extends React.Component
{
  handleOnClick = () => {
    emptyTrash();
  }

  render() {
    return <>
        <audio id="clickWAV">
            <source src={clickWAV} type="audio/wav" />
            Your browser does not support the audio element.
        </audio>
        <div className="trash-bin">
            <img
                id="rubbish"
                src={rubbishPng}
                alt="rubbish"
                className='absolute' />
            <img
                src={binPng}
                alt="empty trash bin"
                className="absolute"
                onClick={this.handleOnClick}/>

        </div>
    </>
  }
}

export default Trash;