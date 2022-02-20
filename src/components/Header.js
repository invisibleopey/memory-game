import React from 'react';
import Scoreboard from './Scoreboard';

function Header() {
  return (
    <header className="header" data-testid="header">
      <h1>Comrade Memory Game</h1>
      <Scoreboard />
    </header>
  );
}

export default Header;
