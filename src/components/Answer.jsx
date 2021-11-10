import { useEffect, useState } from "react";
import "../App.css";
import Character from "./Character";
const Answer = (props) => {
  // characterId: string
  // color: string
  // name: string
  // code: string
  // answer: string

  const [classStr, setClassStr] = useState('answer-wrapper');

  useEffect(() => {
    setTimeout(() => {
      setClassStr('answer-wrapper animated');
    }, 0);
  }, []);

  return (
    <div className={classStr}>
      <Character
        id={props.characterId}
        code={props.code}
        color={props.color}
        name={props.name}
        isChosen={true}
        onClick={() => {}}
      ></Character>
      <div className="answer-baloon">{props.answer}</div>
  </div>
  )
}

export default Answer;