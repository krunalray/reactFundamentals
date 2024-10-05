import React,{useContext} from 'react';
import { FirstName }  from './usecontext';
function Compa() {

  var name = useContext(FirstName)
  
  return (
    <div className="App">
      {name}
    </div>
  );
}

export default Compa;
