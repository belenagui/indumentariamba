import React from 'react'
import Item from './Item'
import {Flex} from '@chakra-ui/react'

const ItemList = ({products}) => {

  

  return (
    <Flex flexWrap="wrap" justifyContent="space-around" alignItems="center" gap={4}>
        {

            products.map((p)=>{
                return (
                    <>
                      <Item product={p} key={p.id}/>
                    
                    </>

                )
            })
        }
    </Flex>
  )
}

export default ItemList