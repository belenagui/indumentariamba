import { Center, Flex, Box } from '@chakra-ui/react'
import React, { useState } from 'react'

const ItemCount = () => {

    const [contador, setContador] = useState(0)
    const onAdd = () =>{
        alert("Gracias!! Acabas de comprar: " + contador + " Productos")
        setContador(0)
    }

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
                <button className='md-2' onClick={onAdd}> Comprar </button>
            </Box>

        </Flex>
      </Center>
      </div>
    </>
  )
}

export default ItemCount