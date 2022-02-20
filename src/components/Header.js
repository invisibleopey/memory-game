import React from 'react';
import Scoreboard from './Scoreboard';

function Header() {
  return (
    <header className="header" data-testid="header">
      <h1>Comrade Memory Game</h1>
      <Scoreboard />
      <p>Get points by clicking on an image but don't click on any more than once!</p>
    </header>
  );
}

export default Header;
