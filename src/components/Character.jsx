import { useEffect, useState } from "react";
import "./Character.css";
const Character = (props) => {
  // id: string
  // color: string
  // name: string
  // code: string
  // onClick: (id: string) => void
  // isChosen: boolean
  // grayMode: boolean

  const [circleClasses, setCircleClasses] = useState('');

  useEffect(() => {
    setCircleClasses('char-circle ' + props.code + (props.isChosen ? ' chosen' : '') + (props.grayMode ? ' gray-mode' : ''));
  }, []);

  useEffect(() => {
    setCircleClasses('char-circle ' + props.code + (props.isChosen ? ' chosen' : '') + (props.grayMode && !props.isChosen ? ' gray-mode' : ''));
  }, [props])

  const addGrayModeClass = () => {
    if (props.grayMode) {
      setCircleClasses(circleClasses + ' gray-mode');
    }
  }

  const removeGrayModeClass = () => {
    if (props.grayMode) {
      setCircleClasses(circleClasses.replace('gray-mode', ''));
    }
  }

  const askAgainBtnColor = () => {
    if (["l", "n", "p"].indexOf(props.id) > -1) {
      return "black";
    }
    return "white";
  };

  return (
      <div className={circleClasses} style={{background: props.color}} onClick={() => props.onClick(props.id)} onMouseEnter={removeGrayModeClass} onMouseLeave={addGrayModeClass}>
        <div className="hover-overlay"></div>
        <img alt="character-art" src={process.env.PUBLIC_URL + '/people/' + props.code + '.svg'}></img>
        <h3>{props.name}</h3>
        
        {/* <div className="ask-again-btn" style={{ background: props.color, color: askAgainBtnColor() }}>
          Ask {props.isChosen ? ' again' : ' me'}
        </div> */}

      </div>
  )
}

export default Character;