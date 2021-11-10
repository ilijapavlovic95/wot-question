import { useEffect, useState } from "react";
import "./App.css";
import Character from "./components/Character";
import { ANSWERS, CHARACTERS } from "./data";

function App() {
  const startDate = new Date("2021-11-19T16:00Z");

  const [characters, setCharacters] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [visibleAnswer, setVisibleAnswer] = useState("");
  const [chosenCharacter, setChosenCharacter] = useState(null);

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

  // const answerTypeWriter = (speed, answer, i) => {
  //   if (i < answer.length) {
  //     console.log("answer: ", answer);
  //     console.log("visibleAnswer: ", visibleAnswer);
  //     const newValue = visibleAnswer + answer.charAt(i);
  //     console.log("newValue: ", newValue);
  //     setVisibleAnswer(newValue);
  //     console.log(visibleAnswer);
  //     i++;
  //     setTimeout(() => {
  //       answerTypeWriter(speed, answer, i);
  //     }, speed);
  //   }
  // };

  const onCharacterChoose = (characterId) => {
    setVisibleAnswer(null);

    let clonedAnswers = [...answers];
    let answerIndex = 0;
    for (let index = 0; index < answers.length; index++) {
      const answerObj = answers[index];
      if (answerObj.character === characterId) {
        answerIndex = index;
        const miliseconds = Math.abs(startDate - new Date());
        const days = Math.floor(miliseconds / 1000 / 60 / 60 / 24);
        const hours = Math.floor(miliseconds / 1000 / 60 / 60 - days * 24);
        const minutes = Math.floor(miliseconds / 1000 / 60 - days * 24 * 60 - hours * 60);
        const seconds = Math.floor(miliseconds / 1000 - days * 24 * 60 * 60 - hours * 60 * 60 - minutes * 60);
        let answer = answerObj.answer;
        answer = answer.replace(":days:", days);
        answer = answer.replace(":hours:", hours);
        answer = answer.replace(":minutes:", minutes);
        answer = answer.replace(":seconds:", seconds);

        setVisibleAnswer(answer);

        setChosenCharacter(characters.find((el) => el.id === answerObj.character));
        clonedAnswers.splice(answerIndex, 1);
        const updatedAnswers = [...clonedAnswers, answerObj];
        setAnswers(updatedAnswers);
        break;
      }
    }
  };

  return (
    <div className="App">
      <div className="heading">
        <h1>Wheel of Timer</h1>
        <h2>Choose someone to give you AN answer how many days are left :)</h2>
        {/* <small>
          (Sorry for bad illustrations. Sorry for bad English. I don't really know the exact time when the show starts,
          I'm just a simple{" "}
          <span style={{ textDecoration: "line-through", fontFamily: "sans-serif" }}>sheepherder</span> programmer)
        </small> */}
        <br />
        <small>
          (Feel free to send me some interesting answers if you want, I'll add it. Twitter:{" "}
          <a href="https://twitter.com">@eliapav)</a>
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
          return (
            <Character
              key={el.id}
              id={el.id}
              color={el.color}
              name={el.name}
              code={el.code}
              onClick={onCharacterChoose}
              isChosen={chosenCharacter && chosenCharacter.id === el.id ? true : false}
            ></Character>
          );
        })}
      </div>
      {chosenCharacter ? (
        <div className="answer-wrapper">
          {/* <div className="chosen-char" style={{ background: chosenCharacter.color }}>
            <img alt="character-art" src={process.env.PUBLIC_URL + "/people/" + chosenCharacter.code + ".svg"}></img>
          </div> */}
          <span>{visibleAnswer}</span>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
