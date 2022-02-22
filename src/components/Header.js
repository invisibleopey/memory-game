import React from 'react';
import Scoreboard from './Scoreboard';

function Header(props) {
  return (
    <header className="header" data-testid="header">
      <h1>Comrade Memory Game</h1>
      <Scoreboard score={props.score} bestScore={props.bestScore} />
      <p>Get points by clicking on an image but don't click on any more than once!</p>
    </header>
  );
}

export default Header;
