import React from 'react'
import './ArrowControls.css'
const ArrowControls = ({ totalItems, activeItem, onPrevClick, onNextClick }) => {
  // Create an array of dots to represent carousel items
  const dots = Array.from({ length: totalItems }, (_, index) => (
    <div
      key={index}
      className={`dot ${activeItem === index ? 'active' : ''}`}
    ></div>
  ));

  return (
    <div className="arrow-control">
      <div className="arrow-left" onClick={onPrevClick}>
      <img src="/assets/icons/right-arrow.png" alt="" />
      </div>
      <div className="dots">{dots}</div>
      <div className="arrow-right" onClick={onNextClick}>
      <img src="/assets/icons/right-arrow.png" alt="" />
      </div>
    </div>
  );
}

export default ArrowControls
