import React, { useEffect, useState } from "react";
import "./App.css";
import { increment, decrement } from "./toolkit/reducer";

function App() {
  const [count, setCount] = useState(36);
  const [message, setMessage] = useState(" ");
  const [headBackgroundColor, setHeadBackgroundColor] = useState("");
  const [changeMessageColor, setChangeMessageColor] = useState("");

  const handleClickPlus = () => {
    setCount((prevState) => prevState + 1);
  };

  const handleClickMinus = () => {
    setCount((prevState) => prevState - 1);
  };

  useEffect(() => {
    if (count < 37) {
      setHeadBackgroundColor("to-low-bk");
      setMessage("Not normal temprature!");
      setChangeMessageColor("rgb(0, 0, 255)");
    } else if (count >= 37 && count < 39) {
      setHeadBackgroundColor("normal-bk");
      setMessage("Normal body temperature!");
      setChangeMessageColor("rgb(173, 255, 47)");
    } else {
      setHeadBackgroundColor("high-bk");
      setMessage("High temperature!");
      setChangeMessageColor("rgb(255, 30, 0)");
    }
  }, [count]);

  return (
    <div className="App">
      <header className="App-header">
        <div className={`head-container ${headBackgroundColor}`}>
          <p style={{ fontSize: `${count}px` }}>{count}</p>
        </div>

        <div className="mid-section ">
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
            <p style={{ color: changeMessageColor }}>{message}</p>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
