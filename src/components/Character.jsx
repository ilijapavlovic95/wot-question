import "./Character.css";
const Character = (props) => {
  // id: string
  // color: string
  // name: string
  // code: string
  // onClick: (id: string) => void
  // isChosen: boolean

  const askAgainBtnColor = () => {
    if (["l", "n", "p"].indexOf(props.id) > -1) {
      return "black";
    }
    return "white";
  };

  return (
      <div className={'char-circle ' + props.code + (props.isChosen ? ' chosen' : '')} style={{background: props.color}} onClick={() => props.onClick(props.id)}>
        <div className="hover-overlay"></div>
        <img alt="character-art" src={process.env.PUBLIC_URL + '/people/' + props.code + '.svg'}></img>
        <h3>{props.name}</h3>
        {
          props.isChosen ?
          (<div className="ask-again-btn" style={{ background: props.color, color: askAgainBtnColor() }}>
            Ask again
          </div>) 
          : ''
        }
        
      </div>
  )
}

export default Character;