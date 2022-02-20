import React from 'react';

function Scoreboard(props) {
  return (
    <section>
      <div className="current-score">
        <span>Score:</span>
        <span>{props.score}</span>
      </div>
      <div className="best-score">
        <span>Best Score:</span>
        <span>{props.bestScore}</span>
      </div>
    </section>
  );
}
export default Scoreboard;
