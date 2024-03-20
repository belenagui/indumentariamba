import React from 'react'
import { useState, useEffect } from 'react'
import ItemList from './ItemList'

const ItemListContainer = () =>{

  const getProducts = async()=>{
    const response = await fetch ("https://fakestoreapi.com/products")
    const data = await response.json()
    console.log(data)

    return data
  }

  const [product, setProduct] = useState([])
  console.log(product)

  useEffect(() => {
    getProducts().then((product)=> setProduct(product))
  },[])

  return (
    <>
      <ItemList product={product}/>
    </>
  )

}

export default ItemListContainer