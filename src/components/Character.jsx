import "./Character.css";
const Character = (props) => {
  // color: string
  // name: string
  // code: string
  return (
      <div className={'char-circle ' + props.code} style={{background: props.color}}>
        <div className="hover-overlay"></div>
        <img src={process.env.PUBLIC_URL + '/people/' + props.code + '.svg'}></img>
        <h3>{props.name}</h3>
      </div>
  )
}

export default Character;