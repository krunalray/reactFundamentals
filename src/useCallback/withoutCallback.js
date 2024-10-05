import React, { useState, useCallback } from 'react';
im
export default function UseCallbackDemo() {

	var funccount = new Set();
const [count, setCount] = useState(0)
const [number, setNumber] = useState(0)

const incrementCounter = () => {
	console.log("------- ----incrementCounter")
	setCount(count + 1)
}
const decrementCounter = () => {
	console.log("------- ----decrementCounter")
	setCount(count - 1)
}
	
const incrementNumber = () => {
	console.log("------- ----incrementNumber")
	setNumber(number + 1)
}
	
funccount.add(incrementCounter);
funccount.add(decrementCounter);
funccount.add(incrementNumber);
alert(funccount.size);
return (
	<div>
		<p>Without useCallback Hook: The problem is that once the counter is updated, all three functions are recreated again. The alert increases by three at a time but if we update some states all the functions related to that states should only re-instantiated. If another state value is unchanged, it should not be touched</p>
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

	<button onClick={incrementNumber}>
		increase number
	</button>

	</div>
)
}

