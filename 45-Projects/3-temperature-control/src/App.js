import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [temperatureValue, setTemperatureValue] = useState(10);
  var r = document.querySelector(':root');

  const changeColor = (newTemperature) => {
    setTemperatureValue(newTemperature);
    if (newTemperature <= 40 && newTemperature>-20) {
      r.style.setProperty('--hue', (30 + 240 * (30 - temperatureValue) / 60));
    }
  }

  const increaseTemperature = () => {changeColor(temperatureValue + 1)};

  const decreaseTemperature = () => {changeColor(temperatureValue - 1)};

  return (
    <div className="app-container">
      <div className="temperature-display-container">
        <div className={`temperature-display`}>
          {temperatureValue}°C
        </div>
      </div>
      <div className="button-container">
        <button onMouseDown={increaseTemperature}>+</button>
        <button onClick={decreaseTemperature}>-</button>
      </div>
    </div>
  );
};

export default App;
