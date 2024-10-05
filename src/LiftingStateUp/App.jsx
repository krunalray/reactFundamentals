// i want to create one list of element then share to show somewhere and share so total element 
// 1. app - parent component - use for sharing state 
// 2. create list  - list state  
// 3 . show list - list state 
// 4 . total element of list  - list state 

import React,{useState} from 'react'
import AddToList from './AddToList';
import ListCount from './ListCount';
import ListShow from './ListShow';
export default function App() {
    const [list,setList]=useState([])
  return (
    <div>
        <AddToList setList={setList}/>
        <ListCount list={list}/>
        <ListShow list={list}/>
    </div>
  )
}
