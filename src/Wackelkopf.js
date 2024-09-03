import React, { useState } from 'react';
import './Wackelkopf.css';

const Wackelkopf = () => {
  const [position, setPosition] = useState(0);

  const moveLeft = () => {
    setPosition(position - 10);
  };

  const moveRight = () => {
    setPosition(position + 10);
  };

  return (
    <div className="wackelkopf-container">
      <img
        className="wackelkopf-image"
        src={process.env.PUBLIC_URL + '/funny.jpg'}
        alt="Wackelkopf"
        style={{ transform: `translateX(${position}px)` }}
      />
      <button onClick={moveLeft}>Nach links</button>
      <button onClick={moveRight}>Nach rechts</button>
    </div>
  );
};

export default Wackelkopf;
