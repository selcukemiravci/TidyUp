import React from 'react';
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