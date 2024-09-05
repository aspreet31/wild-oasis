"use client"
import { useState } from "react"

export default function Counter() {
    const [count, setCount] =useState(0);
    function handleCount(){
        setCount((c)=>c+1);
    }
  return (
    <button onClick={handleCount}>{count}</button>
  )
}
