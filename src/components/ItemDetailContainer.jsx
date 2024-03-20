import React from 'react'
import { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail'


const ItemDetailContainer = () => {
    const getProducts = async ()=>{
        const response = await fetch("https://fakestoreapi.com/products")
        const data = await response.json()

        return data
    }

    /* estado del array inicial */
    const [product, setProduct] = useState([])

    /* Lo que venga de la api con una promesa se lo seteo a product */
    useEffect(() =>{
        getProducts().then((product) => setProduct(product))
    }, [])

 return (
    <>
    {
        product.map((p) =>{
            return(
                <ItemDetail product={p}/>
            )
        })
    }
    </>
  )
}

export default ItemDetailContainer