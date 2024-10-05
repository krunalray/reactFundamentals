import React,{useRef} from 'react';
import Display from './display';
function UseRefExample(){
    var name = useRef(null);

    function updateInput(){
        name.current.value = "1000";
    }
    console.log("------name",name);
    return(
        <div className="App">
        <h1>forwardRef in React </h1>
        <Display ref={name}/>
        <button  type="submit" className="mt-3 btn btn-primary" onClick={updateInput} >Update Input</button>
      </div>
    )
}
export default  UseRefExample;