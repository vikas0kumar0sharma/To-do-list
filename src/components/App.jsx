import React, { useState } from "react";
import List from './list.jsx'
import Input from './input.jsx'

function App() {
  const [arr,setArr]=useState([])
  const [word,setWord]=useState("")

  function add(){
    setArr([...arr,word])
    setWord("")
  }
  function change(e){
    setWord(e.target.value)
  }

  function dlt(id){
    setArr(arr.filter((it,index)=>{
      return index!=id
    }))
  } 


  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <Input change={change} word={word} add={add} />
      </div>
      <div>
        <ul>
          {   
            arr.map((it,index)=>(
              <List it={it} key={index} dlt={dlt} id={index} />
            )) 
          }
        </ul>
      </div>
    </div>
  );
}

export default App;
