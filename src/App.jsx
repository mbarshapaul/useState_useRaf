
import { useState } from 'react'
import './App.css'
import { useRef } from 'react';

function App() {
  // let[count,setCount] =useState(0);
  // let countRef =useRef(0);
  // =============
  let dropRef = useRef(null)
  let handleDrop =()=>{
    // console.log(dropRef.current);
    if (dropRef.current.style.display =='block') {
      dropRef.current.style.display ='none'
    } else {
      dropRef.current.style.display ='block'
    }

  }


  // // useState
  // let handelClick=()=>{
  //   count++
  //   setCount(count)
  // }
  //  // useState

  // //  useRef
  // let handelClick2=()=>{
  //  console.log(countRef.current++)
  //  .current++
  // }
  // //  useRef

  return (
    <>
    {/* <h1>useState</h1> 
    <h2>{count}</h2> 
    <button onClick ={handelClick}>Click</button> */}
    {/* ============= */}
    {/* <h1>useRef</h1> 
    <h2>{countRef.current}</h2> 
    <button onClick ={handelClick2}>Click</button> */}
    
    {/* ================= */}
    <div onClick={handleDrop}>
      <button className='bg-green-400 p-4 ml-6'>click</button>
      <div className="py-8 bg-pink-500 hidden w-60 ml-6 " ref={dropRef}>
        <ul className='text-center'>
          <li>home</li>
          <li>about</li>
          <li>blog</li>
          <li>service</li>
        </ul>
      </div>
    </div>
    </>
  )
}

export default App
