import React, { useEffect, useState } from 'react';
import './styles/App.css';
import Header from '../src/components/Header';
import Cards from './components/Cards';

function App() {
  const shuffleDivs = () => {
    let parent = document.querySelector('.cards');
    let divs = parent.children;
    let frag = document.createDocumentFragment();
    while (divs.length) {
      frag.appendChild(divs[Math.floor(Math.random() * divs.length)]);
    }
    parent.appendChild(frag);
  };
  const handleSelection = () => {};
  return (
    <div className="App">
      <Header />
      <main>
        <Cards handleSelection={handleSelection} />
      </main>
    </div>
  );
}

export default App;
