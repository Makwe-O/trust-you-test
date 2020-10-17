import React from 'react';

const Card = ({ cardData }) => {
  const date = new Date(cardData?.creation_date);
  return (
    <div className='card-container'>
      <h4>{cardData?.review_title}</h4>
      <p>{cardData?.guest_name}</p>
      <p>{date.toISOString()}</p>
    </div>
  );
};

export default Card;
