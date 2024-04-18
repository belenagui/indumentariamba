import React, { useEffect} from 'react'
import ItemCount from "./ItemCount/ItemCount";

import { Card, CardBody, CardFooter, Stack, Image, Divider, Button, ButtonGroup, Heading, Text } from '@chakra-ui/react'
import { Flex, Spacer } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import {useState, useContext} from "react";
import { CartContext } from '../Context/CartContext';
import { Link } from 'react-router-dom';

const ItemDetail = ({products}) => {
  const {cart, setCart} = useContext(CartContext);
  const [quantityAdded, setQuantityAdded]= useState(0);

  const handleOnAdd = (quantity) =>{
    setQuantityAdded(quantity);

    const productAdded = {
      ...products,
      quantity,
    }

    let updateCart = [...cart];
    const isInCart = updateCart.find((product)=> product.id === productAdded.id);
    if(isInCart){
      isInCart.quantity += quantity;
    }else{
      updateCart.push(productAdded);
    }
    setCart(updateCart);
  }

  return (

        <div className='itemDetailContainer'>
             <div key={products.id}>
              <Card maxW='sm' bg='#F7E3AF'>
              <CardBody>
                <Image
                  src={products.image}

                  borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                  <Heading size='md'>{products.tittle}</Heading>
                  <Text>
                    {products.description}
                  </Text>
                  <Text>
                    {products.category}
                  </Text>
                  <Text color='blue.600' fontSize='2xl'>
                    ${products.price}
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                {
                  quantityAdded > 0?(
                    <ButtonGroup spacing='2'>
                      <Button variant='solid' colorScheme='blue'>
                        <Link to={"/Cart"}>Terminar compra</Link>
                      </Button>
                    </ButtonGroup>
                  ) :(
                    <ItemCount
                    onAdd={handleOnAdd}
                    disabled ={products.stock ==0}
                    />

                  )
                }
              </CardFooter>

            </Card>


             </div>

        </div>

)

}

export default ItemDetail