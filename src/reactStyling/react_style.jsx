import React from 'react'
import Title from './Title'
import './Style.css';
export default function ReactStyling() {
        // 1.stylesheet file
        // 2 .inline css
        // 3 .module css
  let heading = {
    fontSize:"50px",
    color:"green",
  }
  return (
    <div>
        <h1 className='heading'> My name is Dixit</h1>
        <Title/>
    </div>
  )
}
