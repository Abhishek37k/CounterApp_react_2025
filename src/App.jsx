import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(0);

  function increaseCounter(){
    setCount(count+1);
  }
   function decreaseCounter(){
    setCount(count-1);
  }
 function resetCounter(){
    setCount(0);
  }
  return (
    <>
      <h2>Counter Project Using react </h2>
      <p>Value : {count}</p>
      <button onClick={increaseCounter}>Increase Value</button>&nbsp;&nbsp;
      <button onClick={decreaseCounter}>Decrease Value</button> <br /><br />
      <button onClick={resetCounter}>Reset Value</button>
    </>
  )
}

export default App
