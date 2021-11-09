import { useEffect, useState } from "react";
import "./App.css";
import Character from "./components/Character";
import { CHARACTERS } from "./data";

function App() {
  const startDate = new Date("2021-11-19T16:00Z");
  const miliseconds = Math.abs(startDate - new Date());
  const seconds = miliseconds / 1000;
  const minutes = miliseconds / 1000 / 60;
  const hours = miliseconds / 1000 / 60 / 60;
  const days = miliseconds / 1000 / 60 / 60 / 24;

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    setCharacters(shuffleArray(CHARACTERS));
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
        <h1>How long until the Wheel of Time show starts ?</h1>
        <h2>Choose someone to give you AN answer :)</h2>
        <small>
          (Sorry for bad illustrations, I'm just a simple{" "}
          <span style={{ textDecoration: "line-through", fontFamily: "sans-serif" }}>sheepherder</span> programmer)
        </small>
        {/* <h3>{startDate.toLocaleString()}</h3>
        <h3>Miliseconds: {miliseconds}</h3>
        <h3>Seconds: {seconds.toFixed(2)}</h3>
        <h3>Minutes: {minutes.toFixed(2)}</h3>
        <h3>Hours: {hours.toFixed(2)}</h3>
        <h3>Days: {days.toFixed(2)}</h3> */}
      </div>
      <div className="team-wrapper">
        {characters.map((el) => {
          return <Character color={el.color} name={el.name} code={el.code}></Character>;
        })}
      </div>
    </div>
  );
}

export default App;
