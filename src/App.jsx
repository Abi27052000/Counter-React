import { useState } from 'react'

import './App.css'

function App() {
  const [counter, setCounter] = useState(0)

  const addValue = () => {
    setCounter((prevCounter)=>prevCounter+1)
    setCounter((prevCounter)=>prevCounter+1)
    setCounter((prevCounter)=>prevCounter+1)
    setCounter((prevCounter)=>prevCounter+1)
  
  }
  const subtractValue = () => {setCounter(counter-1)}


  return (
    <>
    <h1>REACT PROJECT {counter}</h1>
    <h2>Counter value:{counter} </h2>
    <button onClick={addValue}>Add Value</button> {" "}
    <button onClick={subtractValue}>Remove Value</button>
    <p>footer: {counter} </p>
      
    </>
  )
}

export default App
