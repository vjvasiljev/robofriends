import React from 'react';

const Card = () => {
  return (
    <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img alt="Robot" src="https://robohash.org/Slava?200x200" />
      <div>
        <h2>Bender</h2>
        <p>bender@futurama.done</p>
      </div>
    </div>
  );
}

export default Card;