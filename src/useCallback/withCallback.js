import React, { useState, useCallback } from 'react'
const funccount = new Set();
export default function UseCallbackDemo() {
  
  const [count, setCount] = useState(0)
  const [number, setNumber] = useState(0)
  
const incrementCounter = useCallback(() => {
  console.log("--------useCallback ----incrementCounter")
  setCount(count + 1)
}, [count])
const decrementCounter = useCallback(() => {
  console.log("--------useCallback ----decrementCounter")
  setCount(count - 1)
}, [count])
const incrementNumber = useCallback(() => {
  console.log("--------useCallback ----incrementNumber")
  setNumber(number + 1)
}, [number])
    
funccount.add(incrementCounter);
funccount.add(decrementCounter);
funccount.add(incrementNumber);
alert(funccount.size);
  
  return (
    <div>
      <p>
      Output: As we can see from the below output when we change the state ‘count’ then two functions will re-instantiated so the set size will increase by 2 and when we update the state ‘name’ then only one function will re-instantiated and the size of the set will increase by only one

      </p>
      Count: {count}
      <button onClick={incrementCounter}>
         Increase counter
      </button>
      <button onClick={decrementCounter}>
         Decrese Counter
      </button>
      <button onClick={incrementNumber}>
         increase number
      </button>
    </div>
  )
}
  