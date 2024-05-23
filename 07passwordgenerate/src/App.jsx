import { useState, useCallback ,useEffect,useRef} from 'react'

import './App.css'

function App() {
  const [length, setlength] = useState(8)
  const[Numallowed, setNumallowed]=useState(false)
  const[charallowed,setcharallowed]=useState(false)
  const[password,setpassword]=useState("")

  const passref=useRef(null)
 
  const passwordGenerator= useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(Numallowed){
      str+="0123456789"
    }
    if(charallowed){
      str+="!@#$%^&*()"
    }

    for (let i = 1; i <= length; i++) {
      let char=Math.floor(Math.random()*str.length+1)
      pass+=str.charAt(char)
      
    }
    setpassword(pass)

  },[length,Numallowed,charallowed,setpassword]) 

  const copyPasswordtoClip=useCallback(()=>{
    passref.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{
    passwordGenerator()
  },[length,Numallowed,charallowed,passwordGenerator])


  return (
    <>
      <h1 className='text-4xl text-center'>Password Generator</h1>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-500'>Password Generator
         <div className='className="flex shadow rounded-lg overflow-hidden mb-4"'>
          <input type="text"
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='password'
          readOnly
          ref={passref}/>
          <button
          onClick={copyPasswordtoClip}>copy</button>
         </div>
         <div className='flex text-sm gap-x-2'>
          <div className='flex-iterms-center gap-x-1'>
            <input type="range"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e)=>{setlength(e.target.value)}} />
            <label>Length:{length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
            type="checkbox"
            defaultChecked={Numallowed}
            id="numberInput"
            onChange={()=>{
              setNumallowed((prev)=>!prev)
            }}
            />
            <label htmlFor='numberInput'>Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
            type="checkbox"
            defaultChecked={charallowed}
            id="charInput"
            onChange={()=>{
              setcharallowed((prev)=>!prev)
            }}
            />
            <label htmlFor='charInput'>Characters</label>
          </div>
         </div>
      </div>
    </>
  )
}

export default App
