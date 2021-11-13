/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react';
import './App.css';
import { CHARACTERS } from './assets/data';


function App() {
  const startDate = new Date('2021-11-19T01:00Z');
  const title = 'The Wheel Of Timer';

  const [themes, setThemes] = useState(null);
  const [timer, setTimer] = useState(null);
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    setThemes(shuffleArray(CHARACTERS));
    calculateTimer();
    setInterval(() => {
      calculateTimer();
    }, 1000);
  }, []);

  useEffect(() => {
    console.log(themes);
    if (themes && !theme) {
      setTheme(themes.find(el => el.id === 'md'));
    }
  }, [themes]);

  const calculateTimer = () => {
    const miliseconds = Math.abs(startDate - new Date());
    const days = Math.floor(miliseconds / 1000 / 60 / 60 / 24);
    const hours = Math.floor(miliseconds / 1000 / 60 / 60 - days * 24);
    const minutes = Math.floor(miliseconds / 1000 / 60 - days * 24 * 60 - hours * 60);
    const seconds = Math.floor(miliseconds / 1000 - days * 24 * 60 * 60 - hours * 60 * 60 - minutes * 60);
    const daysStr = days < 10 ? '0' + days : days.toString();
    const hoursStr = hours < 10 ? '0' + hours : hours.toString();
    const minutesStr = minutes < 10 ? '0' + minutes : minutes.toString();
    const secondsStr = seconds < 10 ? '0' + seconds : seconds.toString();
    setTimer([{ label: 'days', value: daysStr }, { label: 'hours', value: hoursStr }, { label: 'minutes', value: minutesStr }, { label: 'seconds', value: secondsStr }]);
  };

  const switchToPrevTheme = () => {
    const index = themes.findIndex(el => el.id === theme.id);
    if (index === 0) {
      setTheme(themes[themes.length - 1]);
    } else {
      setTheme(themes[index - 1]);
    }
  };

  const switchToNextTheme = () => {
    const index = themes.findIndex(el => el.id === theme.id);
    if (index === themes.length - 1) {
      setTheme(themes[0]);
    } else {
      setTheme(themes[index + 1]);
    }
  };

  const shuffleArray = (unshuffledArray) => {
    return unshuffledArray
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
  };

  return theme && (
    <div className={'App ' + theme.id} style={{ '--timer-background': theme.color, '--timer-color': 'white' }}>
      <div className="inner-wrapper">
        <div className="theme">
          <div className="chooser-label">CHOOSE THEME</div>
          <div className="theme-chooser">
            <div className="prev-theme arrow" onClick={switchToPrevTheme}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" /></svg>
            </div>
            <div className="current-theme">{theme.theme}</div>
            <div className="next-theme arrow" onClick={switchToNextTheme}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" /></svg>
            </div>
          </div>
        </div>

        <div className="wot-timer">

          <div className="inner-wrapper">
            <div className="timer-title">
              THE WHEEL OF TIMER
            </div>
            <div className="values">
              {
                timer && timer.map(col =>
                  <div key={col.label} className="timer-col value">
                    {[...col.value].map((char, charIndex) => (<span key={charIndex}>{char}</span>))}
                  </div>
                )
              }
            </div>
            <div className="labels">
              <div className="timer-col label">
                <div>days</div>
              </div>
              <div className="timer-col label">
                <div>hours</div>
              </div>
              <div className="timer-col label">
                <div>minutes</div>
              </div>
              <div className="timer-col label">
                <div>seconds</div>
              </div>
            </div>

            <div className="theme-character">
              <div className="char-avatar">
                <img className={theme.id + '-img'} alt="character-art" src={process.env.PUBLIC_URL + '/people/' + theme.code + '.png'}></img>
              </div>
              <div className="char-text">{theme.quote}</div>
            </div>

            <div className="theme mobile">
              <div className="theme-chooser">
                <div className="prev-theme arrow" onClick={switchToPrevTheme}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" /></svg>
                </div>
                <div className="current-theme">{theme.theme}</div>
                <div className="next-theme arrow" onClick={switchToNextTheme}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" /></svg>
                </div>
              </div>
            </div>

          </div>


        </div>
      </div>
    </div>
  );
}

export default App;
