import { Divider, Flex, Box } from '@chakra-ui/react'
import React from 'react'

const CartWidget = () => {
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
          <p>5</p>

        </Box>
      </Flex>
    </div>

  )
}

export default CartWidget