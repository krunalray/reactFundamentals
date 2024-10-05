import React from 'react';
import ChildB from './child-B';
import ChildA from './child-A';
export default function ReactFragment() {
   return (
         <React.Fragment>
            <ChildA />
            <ChildB />
         </React.Fragment>
   )
}
