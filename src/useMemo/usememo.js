import React  from 'react'
export default function UseMemo(){
const [counter, setCount] = React.useState(1);
const [item,setItem]=React.useState(2);

const multiCount = React.useMemo(
    function multiCount(){
        console.warn("------check use memo")
            return counter * 5;
    },[counter]
    )
   return(
    <div className="useMemo">
        <h6>
            Example of UseMemo
        </h6>
        <p>
         counter is : {counter}
        </p>
        <p>
         item is : {item}
        </p>
        {multiCount}
        <button onClick={()=> setCount}>Set Count</button>
        <button onClick={()=> setItem(item * 2 )}>Set Item</button>
    </div>
   )
}

