import React from 'react';
import data from '../data/customData.json';

function Cards() {
  return (
    <section className="cards" data-testid="cards">
      {data.customData.map((card, index) => {
        return (
          <div key={index}>
            <img src={card.url} alt={card.alt} />
          </div>
        );
      })}
    </section>
  );
}

export default Cards;
