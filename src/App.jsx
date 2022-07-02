import React, {useState} from 'react';
import './App.css';

function App() {

  const [count, setCount] = useState(0)
  const [paragraf, setParagraf] = useState (" ")


  const handleClickPlus = () => {
    setCount(count + 1)
  }

  const handleClickMinus = () => {
   setCount(count - 1)
  }

  const handleClickChangeParagraf = () => {
   setParagraf("La MuNcA!")
  }

  return (
    <div className="App">
      <header className="App-header">
         
        <div className='little-container'>
        <p>
         {count}
        </p>
        </div>

        <div className='something'>

        <button onClick={handleClickPlus}><h1>+</h1></button>
        <button onClick={handleClickMinus}><h1>-</h1></button>

        </div>

        <div className='bottom'>

        <div className='nouse'>
         <button onClick={handleClickChangeParagraf}>Click!</button>
        </div>

        <div className='mouth'>
           <p>{paragraf}</p>
        </div>

        </div>
        
      </header>
    </div>
  );
}

export default App;
