import React, {useState} from 'react';
import './App.css';

function App() {

  const [count, setCount] = useState(0)


  const handleClickPlus = () => {
    setCount(count + 1)
  }

  const handleClickMinus = () => {
   setCount(count - 1)
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
         <p></p>
        </div>

        <div className='mouth'>

           <div></div>
        </div>

        </div>
        
      </header>
    </div>
  );
}

export default App;
