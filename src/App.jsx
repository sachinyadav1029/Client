import React from 'react'
import { useState } from 'react'
 import axios from 'axios'
const App = () => {
  const [data , Setdata] = useState("")
  const handleclick = async()=>{
     const response = prompt("Enter your color name :");
     let res = await axios.get(`http://localhost:8000/${response}`);
     Setdata(res.data);
+
    P

  }
  return (  
   <>
    <div style={{height:"100vh" , width:"100vw" , backgroundColor:data}}>
     
    </div>
     <button onClick={handleclick}>Click</button>
   </>
  )
}

export default App