import React from 'react';
import data from '../data/customData.json';

function Cards(props) {
  return (
    <section className="cards" data-testid="cards">
      {data.customData.map((card, index) => {
        return (
          <div key={index} onClick={props.handleSelection}>
            <img src={card.url} alt={card.alt} id={index} />
          </div>
        );
      })}
    </section>
  );
}

export default Cards;
