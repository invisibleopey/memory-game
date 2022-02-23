import React, { useEffect, useState } from 'react';
import './styles/App.css';
import Header from '../src/components/Header';
import Cards from './components/Cards';

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [currentClicked, setCurrentClicked] = useState(null);
  const [clicked, setClicked] = useState([]);

  const shuffleDivs = () => {
    let parent = document.querySelector('.cards');
    let divs = parent.children;
    let frag = document.createDocumentFragment();
    while (divs.length) {
      frag.appendChild(divs[Math.floor(Math.random() * divs.length)]);
    }
    parent.appendChild(frag);
  };

  const handleSelection = (event) => {
    setCurrentClicked(Number(event.target.id));
  };
  useEffect(() => {
    if (clicked.includes(currentClicked)) {
      if (score > bestScore) {
        setBestScore(score);
      }
      setScore(0);
      setClicked([]);
    } else if (currentClicked !== null && !clicked.includes(currentClicked)) {
      setScore(score + 1);
      setClicked((prevState) => {
        return [...prevState, currentClicked];
      });
      // Set the currentClicked back to null to fix the error of not being
      // able to click a wrong answer immediately
      setCurrentClicked(null);
    }
  }, [currentClicked]);
  useEffect(() => {
    shuffleDivs();
  }, [score]);
  return (
    <div className="App">
      <Header score={score} bestScore={bestScore} />
      <main>
        <Cards handleSelection={handleSelection} />
      </main>
    </div>
  );
}

export default App;
