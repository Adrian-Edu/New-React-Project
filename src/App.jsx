import React, { useEffect, useState } from "react";
import { increment, decrement } from "./toolkit/reducer";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const [message, setMessage] = useState(" ");
  const [headBackgroundColor, setHeadBackgroundColor] = useState("");
  const [changeMessageColor, setChangeMessageColor] = useState("");

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
          <button onClick={() => dispatch(decrement())}>
            <h1>-</h1>
          </button>
          <button onClick={() => dispatch(increment())}>
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
