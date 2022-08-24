import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(36);
  const [message, setMessage] = useState(" ");
  const [headBackgroundColor, setHeadBackgroundColor] = useState("");

  const handleClickPlus = () => {
    setCount((prevState) => prevState + 1);
  };

  const handleClickMinus = () => {
    setCount((prevState) => prevState - 1);
  };

  useEffect(() => {
    if (count >= 39) {
      setHeadBackgroundColor("high");
      setMessage("High temperature!");
    } else if (count < 37) {
      setHeadBackgroundColor("to-low");
      setMessage("Not normal temprature!");
    } else {
      setHeadBackgroundColor("normal");
      setMessage("Normal body temperature!");
    }
  }, [count]);

  return (
    <div className="App">
      <header className="App-header">
        <div className={`head-container ${headBackgroundColor}`}>
          <p style={{ fontSize: `${count}px` }}>{count}</p>
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
          <div className="nouse"></div>

          <div className="mouth">
            <p>{message}</p>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;

//   <button onClick={handleClickChangeParagraf}>Click!</button>
