import React from 'react'
import { Card, Image, Stack, Text, CardBody, Divider, Button, ButtonGroup, CardFooter, Heading } from '@chakra-ui/react'
import ItemCount from "./ItemCount/ItemCount";


const Item = ({producto}) => {

  console.log(producto)
  return (
    <div>

        <Card maxW='sm'>
  <CardBody>
    <Image
      src={producto.image}
      
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{producto.tittle}</Heading>
      <Text>
        {producto.description}
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        ${producto.price}
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Detalle
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Agregar al Carrito
      </Button>
    </ButtonGroup>
  </CardFooter>
  <ItemCount/>
</Card>
    </div>
  )
}

export default Item