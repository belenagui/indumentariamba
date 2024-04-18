import React from 'react'
import { Card, Image, Stack, Text, CardBody, Divider, Button, ButtonGroup, CardFooter, Heading } from '@chakra-ui/react'
import ItemCount from "./ItemCount/ItemCount";
import { Navigate } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';


const Item = ({product}) => {
  const{id, image, tittle, price} = product

  console.log(product)
  return (
    <div>

        <Card maxW='sm'>
  <CardBody>
    <Image
      src={image}
      
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{tittle}</Heading>
    
      <Text color='blue.600' fontSize='2xl'>
        ${price}
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        <Link to={`/item/${product.id}`}>Detalle</Link>
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
    </div>
  )
}

export default Item