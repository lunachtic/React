import React, { useState } from "react";
import "./app.css";

const App = () => {
  const [value, setvalue] = useState(10);

  const increaseValue = () => {setvalue(value + 1);};
  const decreaseValue = () => {setvalue(value - 1);};

  return (
    <div className="app-container">
      <div className="display-container">
        <div className={`display`}>
          {value}
        </div>
      </div>
      <div className="button-container">
        <button onMouseDown={increaseValue}>+</button>
        <button onClick={decreaseValue}>-</button>
      </div>
    </div>
  );
};

export default App;
