import { Center, Flex, Box } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Button, ButtonGroup } from '@chakra-ui/react'

const ItemCount = ({onAdd, disabled}) => {

    const [contador, setContador] = useState(1)


    return (
    <>
      <div className='center'>
      <Center>
        <Flex>
            <Box px="2">
                <button className='md-2' onClick={() => contador < 10? setContador(contador + 1) : setContador(10)}>+</button>
            </Box>
            <Box px="2">
                <p className='md-2'>{contador}</p>
            </Box>
            <Box px="2">
                <button className='md-2' onClick={() => contador > 0? setContador(contador - 1) : setContador(0)}>-</button>
            </Box>
            <Box px="2">
                <Button className='md-2'colorScheme='teal' variant='solid'
                 onClick={()=>onAdd(contador)}>
                Agregar al carrito
                </Button>
            </Box>

        </Flex>
      </Center>
      </div>
    </>
  )
}

export default ItemCount