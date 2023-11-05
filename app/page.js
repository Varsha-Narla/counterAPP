'use client'
import React from 'react'
import Hello from './components/hello'
import { useState } from 'react'

const page = () => {
  const[count,setcount]=useState(0);

  return (
    <>
    <h1>
      counter:{count}
    </h1>
    <button className='px-2 py-3 text-teal-400 border-spacing-3 ' onClick={()=>setcount(count+1)}>Increment</button>
    <button onClick={()=>setcount(count-1)}>Decrement</button>
    </>
    
  )
}

export default page