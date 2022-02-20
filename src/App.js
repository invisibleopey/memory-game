import React from 'react';
import './styles/App.css';
import Header from '../src/components/Header';
import Cards from './components/Cards';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Cards />
      </main>
    </div>
  );
}

export default App;
