import React from 'react';
import './Body.css';

export default function Body(props) {
  return (
    <div className='body-container'>
      <img className="image-body-card" src={props.src} alt="Card Image" />
      <div className="column-body-container">
        <div className="text-body-card">
          <h4 className='heading-body-container'>LEVEL_DAYS</h4>
          <h4 className='heading-body-container-second'>Conro</h4>
        </div>
        <div className="button-body-card">
          <button className='button-btn'>Listen</button>
          <button className='button-simple'>Share</button>
        </div>
      </div>

      {/* Add social handles here */}
      <div className="social-handles">
        <span className="social-handle">Facebook</span>
        <span className="social-handle">Twitter</span>
        <span className="social-handle">Instagram</span>
        {/* Add more social handles as needed */}
      </div>
    </div>
  );
}
