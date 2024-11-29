import React from 'react';
import { useState } from 'react';
import axios from 'axios';
export default function Admin() {
    const [name,setName] = useState()
    const[price,setPrice] = useState()
    const[desc,setDesc] = useState()
    const[url,setUrl] = useState()
    const api="http://localhost:8080/"
    const addProducts = async () => {
        await axios.post(api,{name:name,desc:desc,price:price,url:url})
    }
  return (
    <div>
      <div>Admin
        <p><input type="text" onChange={(e)=>setName(e.target.value)} placeholder='Enter Name'></input></p>
        <p><input type="text" onChange={(e)=>setDesc(e.target.value)} placeholder='Enter Description'></input></p>
        <p><input type="text" onChange={(e)=>setPrice(e.target.value)} placeholder='Enter Price'></input></p>
        <p><input type="text" onChange={(e)=>setUrl(e.target.value)} placeholder='Enter url'></input></p>
        <button onClick={addProducts}>Save</button>
      </div>
    </div>
  );
}