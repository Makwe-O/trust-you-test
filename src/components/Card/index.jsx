import React from 'react';

const Card = ({ cardData }) => {
  const date = new Date(cardData?.creation_date);
  return (
    <div className='card-container'>
      <h4>Title: {cardData?.review_title}</h4>
      <p>Author: {cardData?.guest_name}</p>
      <p>Created At: {date.toISOString()}</p>
    </div>
  );
};

export default Card;
