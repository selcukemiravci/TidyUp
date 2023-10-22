import React from 'react';
import trophyImg from '../../Images/trophy.png';
import './Trophy.css'

class Trophy extends React.Component {
  handleDragStart = (e) => {
    const dragImage = new Image();
    dragImage.src = trophyImg;
    dragImage.width = 50;  // Set to your desired width
    dragImage.height = 50;  // Set to your desired height
    e.dataTransfer.setDragImage(dragImage, 25, 25);  // Center the drag image
    e.dataTransfer.setData('type', 'trophy');
}

  
  handleDragEnd = (e) => {
    const { clientX, clientY } = e;
    this.props.onMove({ x: clientX, y: clientY });
  }

  render() {
    const styles = {
      position: 'absolute',
      top: this.props.position.y,
      left: this.props.position.x,
    }
    return (
      <img
        src={trophyImg}
        alt="golden trophy on top of bookcase"
        className="trophy"
        style={styles}
        onDragStart={this.handleDragStart}
        onDragEnd={this.handleDragEnd}
        draggable={true}
      />
    ); 
  }
}

export default Trophy;
