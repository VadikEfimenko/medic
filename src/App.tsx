import React from 'react';
import logo from './images/logo.png';
import telegram from './images/icons/telegram.svg';
import zen from './images/icons/zen.svg';
import arrow from './images/icons/arrow.svg';
import me from './images/me.jpeg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="headerBackground">
            <img src={logo} className="logo" alt="logo" />
            <button
                onClick={() => {
                    window.location.assign('https://disk.yandex.ru/d/t3otFOcURqyvYg');
                }}
                className="mainLink"
            >
                Материалы

                <img src={arrow} className="arrowIcon" alt="logo" />
            </button>
        </div>
      </header>
      <div className="social">
          <div className="controls">
              <div
                  className="telegram socialItem"
                  onClick={() => window.location.assign('https://t.me/valeria_medic')}
              >
                  <img src={telegram} alt="logo" />
              </div>

              <div
                  className="zen socialItem"
                  onClick={() => window.location.assign('https://zen.yandex.ru/valeria_medic')}
              >
                  <img src={zen} alt="logo" />
              </div>
          </div>
      </div>
      <div className="aboutMe">
          <h1>Обо мне</h1>
          <div className="aboutSection">
              <div className="aboutImage">
                  <img src={me} alt="logo" />
              </div>

              <div className="aboutText">
                  Всем привет, меня зовут Валерия🤍 Я студентка 4 курса ПМГМУ им. И.М. Сеченова.
                  И если честно я очень люблю медицину. Несмотря на то, что существует стереотип,
                  что в медицинском нет личной жизни, да и вообще ничего нет, кроме учёбы - это далеко не так.
                  В своём блоге я делюсь моментами из жизни, путешествиями, вдохновением и мотивацией, не обходится
                  дело и без конспектов и полезных материалов. Искренне считаю, что учиться вместе, поддерживать друг
                  друга и делиться полученной информацией - это бесценно. Поэтому Welcome in medicine world 🌎
              </div>
          </div>
      </div>
      <footer>
          <div
              onClick={() => window.location.assign('https://t.me/vefimencko')}
          >
              Design by @vefimenko
          </div>
      </footer>
    </div>
  );
}

export default App;
