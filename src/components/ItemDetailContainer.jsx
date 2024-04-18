import React from 'react'
import { useState, useEffect, useContext } from 'react'
import ItemDetail from './ItemDetail'
import { CartContext } from '../Context/CartContext'
import { getProductDetail } from '../firebase/firebase'
import { useParams } from 'react-router-dom'



const ItemDetailContainer = () => {

    const [products, setProducts] = useState([]);
    const {id} = useParams();
    const {cart} = useContext(CartContext);

  
    useEffect(() =>{
      let ignore = false
      if (!ignore){
        getProductDetail(id)
        .then((res) => {
          const newCart = [...cart];
          const isInCart = newCart.find((product) => product.id === res.id);
          if (isInCart) {
            setProducts({ ...res, stock: isInCart.stock-isInCart.quantity });
          } else {
            setProducts(res);
          }
        })
        .catch((err) => console.log(err));
      }
      return ()=>{
        ignore = true //para limpieza//
      }
    }, [id,cart])

   return (
    <>
      <ItemDetail
        products={products}
      />
    
    </>
    
   )

}



export default ItemDetailContainer