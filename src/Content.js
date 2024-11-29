import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
export default function Content() {
  const [products,setProducts] = useState([])
  const url="http://localhost:8080/"
  const getData = async () => {
    const response = await axios.get(url)
    setProducts(response.data)
  }
  const deleteProduct = async (id) => {
    await axios.delete(url+id)
    getData()
  }
  useEffect(()=>{
    getData()
  },[])
  // const products = [
  //   {name: "Product 1", price: 34, url:"http://picsum.photos/id/1/200/200"},
  //   {name: "Product 2", price: 54, url:"http://picsum.photos/id/2/200/200"},
  //   {name: "Product 3", price: 96, url:"http://picsum.photos/id/3/200/200"},
  // ]
  return (
    <div style={{display:'flex',justifyContent:'center',flexWrap:'wrap'}}>
      {products.map((value,index)=>(
        <div style={{backgroundColor: 'silver', margin:'10px',padding:'10px'}}>
          <img src={value.url}></img>
        <h2>{value.name}</h2>
        <h3>${value.price}</h3>
        <button>Add to Cart</button>
        <button onClick={()=>deleteProduct(value._id)}>Delete Product</button>
        </div>
      ))}
    </div>
  )
}