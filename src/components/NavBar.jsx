import React from 'react'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Flex,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Box,
  Spacer
} from '@chakra-ui/react'
import CartWidget from './CartWidget'



const NavBar = () => {
  return (
    <div className='navbar'>
      <Flex>
        <Box p='4'>
          
            <h3>MBA-Moda</h3>
     
          
        </Box>
        <Spacer />
        <Box p='4'>
          <Menu>

            <MenuButton className='menuButton'>
              SHOP
            </MenuButton>
            <MenuList className='menuList'>
              <MenuItem>Abrigos</MenuItem>
              <MenuItem>Musculosas</MenuItem>
              <MenuItem>Pantalones</MenuItem>
              <MenuItem>Sport</MenuItem>
            </MenuList>
          </Menu>
        </Box>
        <Spacer />

        <Box p='4'>
              
                 <CartWidget/>
           
        </Box>
      </Flex>
    </div>
  )
}

export default NavBar