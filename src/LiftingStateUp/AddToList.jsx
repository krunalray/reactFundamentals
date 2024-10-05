import React,{useState} from 'react'

export default function AddToList({setList}) {
    // list 
    const [value,setValue]=useState("");

    const formSubmit =(e)=>{
        e.preventDefault();
        setList((prevList)=>{
            return [...prevList,value];
        });
    }
  return (
    <div>
        <form onSubmit={formSubmit}>
            <input type='text' value={value} onChange={(e)=>{setValue(e.target.value)}}/>
            <button>add</button>
        </form>
    </div>
  )
}
