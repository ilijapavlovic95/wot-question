import React, { useEffect, useState } from 'react';
import './App.css';
import Character from './components/Character';
import { ANSWERS, CHARACTERS } from './data';


function App() {
  const startDate = new Date('2021-11-19T01:00Z');

  const [characters, setCharacters] = useState([]);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    setCharacters(shuffleArray(CHARACTERS));
    setAnswers(ANSWERS);
  }, []);

  const shuffleArray = (unshuffledArray) => {
    return unshuffledArray
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
  };

  return (
    <div className="App">
      <div className="heading">
        <h1>The Wheel of Timer</h1>
        <h2>Click on someone to give you AN answer how many days are left :)</h2>
      </div>
      <div className="team-wrapper">
        {characters.map((el) => {
          return (
            <div className="char-wrapper" key={el.id}>
              <Character
                id={el.id}
                color={el.color}
                name={el.name}
                code={el.code}
              ></Character>
              <div className="answer-baloon"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
