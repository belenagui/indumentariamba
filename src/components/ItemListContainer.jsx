import React from 'react'
import { useState, useEffect } from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = () =>{
  const {category}= useParams()
  console.log(category)
  const [products, setProducts] = useState([]);

  const getProducts = async()=>{
    const response = await fetch ("https://fakestoreapi.com/products")
    const data = await response.json()
    console.log(data)

    return data
  }


  useEffect(() => {
    getProducts().then((product)=> setProducts(product))
  },[category])

  const filterProduct = products.filter((product) => product.category === category)



  return (
    <>
     {
      category ? <ItemList products={filterProduct}/> : <ItemList products={products}/>

     }
    </>
  )

}

export default ItemListContainer