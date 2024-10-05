import React from 'react';
import  BuggyCounter from './component';
import ErrorBoundary from './error_boundaries';
export default function App() {
   return (
     <div>
       <hr />
       <ErrorBoundary>
         <p>These two counters are inside the same error boundary. If one crashes, the error boundary will replace both of them.</p>
         <BuggyCounter />
         <BuggyCounter />
       </ErrorBoundary>
      
     </div>
   );
 }
 