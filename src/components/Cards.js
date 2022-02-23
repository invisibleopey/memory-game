import React from 'react';
import data from '../data/customData.json';

function Cards(props) {
  return (
    <section className="cards" data-testid="cards">
      {data.customData.map((card, index) => {
        return (
          <div key={index} onClick={props.handleSelection}>
            <img src={process.env.PUBLIC_URL + card.url} alt={card.alt} id={index} />
          </div>
        );
      })}
    </section>
  );
}

export default Cards;
