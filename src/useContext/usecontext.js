import React,{createContext} from 'react';
import Compa from './compA' ;
const FirstName  = createContext();
function UseContextExample() {

  return (  
    <>
        <FirstName.Provider value={"dixit"}>
          <Compa/>
        </FirstName.Provider>
    </>
  );
}

export default UseContextExample;

export { FirstName };