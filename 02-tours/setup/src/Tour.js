import React, { useState } from 'react';

const Tour = ({id, price, title, info, image, removeTour}) => {
  return (
    <article className="single-tour">
    <img src={image} alt={title} />
      <footer>
        <div className="tour-info">
          <h4>{title}</h4>
          <h4 className='price-info'>{price}</h4>
        </div>
        <p>
        {info}
        <button className='delete-btn' onClick={() => {removeTour(id)}}>not interested</button>
        </p>
      </footer>
    </article>
  );
};

export default Tour;
