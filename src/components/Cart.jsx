import React from 'react'
import { useContext } from "react";
import { CartContext } from '../Context/CartContext';
import { Button, ButtonGroup, Box, Card } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import { Container, CardBody, Stack, Heading, Text, Divider, CardFooter } from '@chakra-ui/react'
import { Button as BootstrapButton } from "react-bootstrap"

const Cart = () => {
  const{
    cart,
    emptyCart,
    totalPrice,
    deleteProduct,
    subtractProduct,
    addProduct
} = useContext(CartContext);

const handleDelete = (id)=>{
  deleteProduct(id)
}

const handleSubtractProduct = (id, quantity)=>{
  quantity > 1 ? subtractProduct(id, quantity) : deleteProduct(id)
}


const handleEmpty = ()=>{
  emptyCart();
}

const handleAddProduct = (id, quantity, stock) => {
  stock > quantity && addProduct(id, quantity)
}

  return (
    <>
      <Container  maxW='2xl' bg='rgb(252, 234, 222)' centerContent>
        <Box padding='4' bg='white' color='black' maxW='md'>
          <h1 className='tituloCart'>Tu carrito de Productos </h1>
           {cart.length===0 ? (
            <h3> Ops ! Aún no agregaste productos </h3>
          ): (
            <>
            {cart.map((product)=>(
            
              <Card key={product.id} maxW='sm'>
                <CardBody>
                <Stack mt='6' spacing='3'>
                <Heading size='md'>{product.tittle}</Heading>
                <Text color='blue.600' fontSize='2xl'>
                  ${product.price}
                </Text>
                <Text color='blue.600' fontSize='2xl'>
                  Cantidad: {product.quantity}
                </Text>
                <p> Precio Final: ${product.price*product.quantity}</p>
                </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                <ButtonGroup spacing='2'>
                  <Button variant='solid' colorScheme='blue'
                    onClick={()=>
                      handleSubtractProduct(product.id, product.quantity)}
                      >
                        -
                  </Button>
                  <Button variant='solid' colorScheme='blue'
                    onClick={()=>
                      handleAddProduct (product.id, product.quantity, product.stock)}
                      >
                        +
                  </Button>
                  <BootstrapButton variant='primary'
                    onClick={()=>
                      handleDelete(product.id)}
                      >
                       <i className="bi bi-trash"></i>
                  </BootstrapButton>
                </ButtonGroup>
             </CardFooter>
            </Card>

            ))}
            <div className='cart-container'>
              <div>
                <h3> Su total: ${totalPrice} </h3>
                <Button p={2} m={4} onClick={handleEmpty} variant='solid' colorScheme='blue'>
                        Vaciar Carrito
                  </Button>
              </div>
              <div>
              <Button variant='solid' colorScheme='blue' >
                <Link to={"/checkout"}>Finalizar Compra</Link>

              </Button>

              </div>
            </div>
            </>
          )}
        </Box>
      </Container>


    </>
  )
}

export default Cart