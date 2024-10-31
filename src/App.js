
import React,{ useState } from 'react'

export default function App() {

  const [num, setNum] = useState(0);

   const plusfive =()=>{
    setNum(item=>Math.min(item+5,15))
   }

   const minusfive =()=>{
    setNum(item=>Math.max(item-5,0))
   }

    return (
    <div>
      <h1>{num}</h1>
        <button onClick={()=>{
            if (num<15) setNum(num+1)
        }}>+1</button>
         <button onClick={()=>{
            if (num>0) setNum(num-1)
        }}>-1</button>
       <button onClick={plusfive}>+5</button>
       <button onClick={minusfive}>-5</button>
       <button onClick={()=>{
        setNum(0)
       }}>Reset</button>
    </div>
  )
}
