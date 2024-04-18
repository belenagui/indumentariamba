import { useState, useEffect } from "react";
import Item from './Item'
import {Flex} from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import { Spinner } from '@chakra-ui/react'
import { getProducts, getProductsByCategory } from '../firebase/firebase'

const ItemList = () => {
  const [products, setProducts] = useState([]);
  const {categoryName} = useParams();

  useEffect(() =>{
    const asyncFunc = categoryName ? getProductsByCategory : getProducts;
    asyncFunc(categoryName)
    .then ((res)=> setProducts(res))
    .catch((err)=> alert ("error " + err));
  },[categoryName]);

  return (
    <Flex flexWrap="wrap" justifyContent="space-around" alignItems="center" gap={4}>
        {products.length > 0 ? (
            products.map((product) =>(
                <Item key={product.id} product={product}></Item>
              ))
          ):(
            <Spinner
              thickness='4px'
              speed='0.65s'
              emptyColor='gray.200'
              color='blue.500'
              size='xl'
            />
            )}
    </Flex>
  )
}

export default ItemList