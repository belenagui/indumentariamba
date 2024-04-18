import { Divider, Flex, Box, Button } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../Context/CartContext'

const CartWidget = () => {
  const {quantityInCart} = useContext(CartContext);
  return (
    <div>
      <Flex>

        <Box>
          <span className="material-symbols-outlined">
              shopping_cart
          </span>

        </Box>
        <Divider/>
        <Box className = 'carritoContainer'>
          <p>{quantityInCart}</p>

        </Box>
      </Flex>
    </div>

  )
}

export default CartWidget