import React from 'react'
import Item from './Item'
import {Flex} from '@chakra-ui/react'

const ItemList = ({product}) => {

  

  return (
    <Flex flexWrap="wrap" justifyContent="space-around" alignItems="center" gap={4}>
        {

            product.map((p)=>{
                return (
                    <div key={p.id}>
                        <Item producto={p}/>
                    </div>
                       
                    
                )
            })
        }
    </Flex>
  )
}

export default ItemList