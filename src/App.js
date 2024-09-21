// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {

  // whatever you want to show on the interface you
  // have to use "useState"
  const[count, setCount] = useState(0);

  function decreaseHandler(){
    setCount(count-1);
  }

  function increaseHandler(){
    setCount(count+1);
  }

  function resetHandler(){
    setCount(0);
  }

  return (
    <div className='w-[100vw] h-[100vh] flex justify-center items-center bg-[#344151] flex-col gap-18' >
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <div className="text-[#0398d4] font-medium text-2xl ">Increase & Decrease</div>

      <div className="bg-white flex justify-center gap-12 py-3 rounded-sm text-[25px] text-[#344151]">
        <button onClick={decreaseHandler} className="border-r-2 text-center w-20 border-[#bfbfbf] text-5xl">-</button>
      
        <div className="font-bold gap-12 text-5xl">
          {count}
        </div>

        <button onClick={increaseHandler} className="border-r-2 text-center w-20 border-[#bfbfbf] text-5xl">+</button>

      </div>

        <button onClick={resetHandler} className="bg=[#0398d4] text-white px-5 py-2 rounded-sm text-lg">Reset</button>

    </div>
  );
}

export default App;
