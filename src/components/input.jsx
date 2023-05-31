import React from "react"

function input({change,word,add}){
  return(
    <>
      <input type="text" onChange={change} value={word} />
        <button onClick={add}>
          <span>Add</span>
        </button>
    </>
  )
}

export default input