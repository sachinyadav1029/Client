import React from 'react'
import { useState } from 'react'
 import axios from 'axios'
const App = () => {
  const [data , Setdata] = useState("")
  const handleclick = async()=>{
     const response = prompt("Enter your color name :");
     let res = await axios.get(`https://client-blush-psi-28.vercel.app/${response}`);
     Setdata(res.data);


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