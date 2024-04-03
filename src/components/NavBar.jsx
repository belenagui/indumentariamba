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
            <h3>MBA-Store</h3>
          </Link>
          
        </Box>
        <Spacer />
        <Box p='4'>
          <Menu>

            <MenuButton className='menuButton'>
              SHOP
            </MenuButton>
            <MenuList className='menuList'>
              <MenuItem>
               <Link to={`/category/${"Women's clothing"}`}>
                 Women's clothing
                </Link>
              </MenuItem>

              <MenuItem>
               <Link to={`/category/${"Jewelery"}`}>
                Jewelery
               </Link>
              </MenuItem>


              <MenuItem>
                <Link to={`/category/${"Men's clothing"}`}>
                 Men's clothing
                </Link>
              </MenuItem>

              <MenuItem>
               <Link to={`/category/${"Electronics"}`}>
                Electronics
               </Link>
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
        <Spacer />

        <Box p='4'>
              <Link to={"/Cart"}>
                 <CartWidget/>
              </Link>
        </Box>
      </Flex>
    </div>
  )
}

export default NavBar