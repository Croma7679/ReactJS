import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter,setCounter]=useState(10)//(We can change the name of function setCounter)(value in the bracket is initialization vallue)
  //let counter=15

  const addvalue=()=>{
    console.log("value is",Math.random());
    counter=counter+1
    setCounter(counter)

  }

  return (
    <>
      <h1>Hello WOrld</h1>
      <button onClick={addvalue}>Add value</button>
      <button>press It</button>
      <p>footer:{counter}</p>
    </>
  )
}

export default App
