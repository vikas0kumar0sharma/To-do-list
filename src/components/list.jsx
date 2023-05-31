import React from "react";

function list({it,dlt,id}) {
  return <li>{it} {<button onClick={()=> dlt(id)} >delete</button>} </li>;
}
export default list;
