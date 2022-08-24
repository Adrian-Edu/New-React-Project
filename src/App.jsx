import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState(" ");
  const [headBackgroundColor, setHeadBackgroundColor] = useState("");

  const handleClickPlus = () => {
    if (count >= 0) {
      setHeadBackgroundColor("plus");
    }
    setCount((prevState) => prevState + 1);
  };

  const handleClickMinus = () => {
    if (count <= 0) {
      setHeadBackgroundColor("minus");
    }
    setCount((prevState) => prevState - 1);
  };

  const handleClickChangeParagraf = () => {
    setMessage("Hello!");
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className={`head-container ${headBackgroundColor}`}>
          <p>{count}</p>
        </div>

        <div className="mid-section">
          <button onClick={handleClickMinus}>
            <h1>-</h1>
          </button>
          <button onClick={handleClickPlus}>
            <h1>+</h1>
          </button>
        </div>

        <div className="bottom">
          <div className="nouse">
            <button onClick={handleClickChangeParagraf}>Click!</button>
          </div>

          <div className="mouth">
            <p>{message}</p>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
