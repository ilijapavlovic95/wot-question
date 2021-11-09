import "./App.css";

function App() {
  const startDate = new Date("2021-11-19T16:00Z");
  const miliseconds = Math.abs(startDate - new Date());
  const seconds = miliseconds / 1000;
  const minutes = miliseconds / 1000 / 60;
  const hours = miliseconds / 1000 / 60 / 60;
  const days = miliseconds / 1000 / 60 / 60 / 24;
  return (
    <div className="App">
      <div className="heading">
        <h1>When the Wheel of Time starts ?</h1>
        <h2>Choose someone to give you AN answer :)</h2>
        {/* <h3>{startDate.toLocaleString()}</h3>
        <h3>Miliseconds: {miliseconds}</h3>
        <h3>Seconds: {seconds.toFixed(2)}</h3>
        <h3>Minutes: {minutes.toFixed(2)}</h3>
        <h3>Hours: {hours.toFixed(2)}</h3>
        <h3>Days: {days.toFixed(2)}</h3> */}
      </div>
      <div className="team-wrapper"></div>
    </div>
  );
}

export default App;
