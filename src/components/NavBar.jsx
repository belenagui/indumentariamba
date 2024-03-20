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
import {Link} from 'react-router-dom'


const NavBar = () => {
  return (
    <div className='navbar'>
      <Flex>
        <Box p='4'>
          <Link to={"/"}>
            <h3>MBA-Moda</h3>
          </Link>
          
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
              <link to={"/Cart"} />
                 <CartWidget/>
              <link/>
        </Box>
      </Flex>
    </div>
  )
}

export default NavBar