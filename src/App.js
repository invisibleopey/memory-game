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
    setCurrentClicked(event.target.id);
    // TODO: Fix error here, and optimize the code
    if (
      currentClicked === clicked[0] ||
      currentClicked === clicked[1] ||
      currentClicked === clicked[2] ||
      currentClicked === clicked[3] ||
      currentClicked === clicked[4] ||
      currentClicked === clicked[5] ||
      currentClicked === clicked[6] ||
      currentClicked === clicked[7] ||
      currentClicked === clicked[8] ||
      currentClicked === clicked[9] ||
      currentClicked === clicked[10] ||
      currentClicked === clicked[11]
    ) {
      setBestScore(score);
      setScore(0);
      setClicked([]);
    } else {
      setScore((prevState) => {
        return prevState + 1;
      });
      setClicked((prevState) => {
        return prevState.concat(currentClicked);
      });
      setCurrentClicked(null);
    }
  };
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
