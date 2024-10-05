import React,{ forwardRef } from 'react';
function Display(props,ref){

    console.log("------ref",ref);
     return(
         <div>
                <input ref={ref} type="text"/>
         </div>
     )
}
export default  forwardRef(Display);