
import { useState } from 'react'
import './App.css'
import { useRef } from 'react';

function App() {
  let[count,setCount] =useState(0);
  let countRef =useRef(0)

  // useState
  let handelClick=()=>{
    count++
    setCount(count)
  }
   // useState

  //  useRef
  let handelClick2=()=>{
   console.log(countRef.current++)
   .current++
  }
  //  useRef

  return (
    <>
    <h1>useState</h1> 
    <h2>{count}</h2> 
    <button onClick ={handelClick}>Click</button>
    {/* ============= */}

    <h1>useRef</h1> 
    <h2>{countRef.current}</h2> 
    <button onClick ={handelClick2}>Click</button>
    </>
  )
}

export default App
