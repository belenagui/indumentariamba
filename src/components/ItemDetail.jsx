import React from 'react'
import ItemCount from "./ItemCount/ItemCount";

import { Card, CardBody, CardFooter, Stack, Image, Divider, Button, ButtonGroup, Heading, Text } from '@chakra-ui/react'
import { Flex, Spacer } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'

const ItemDetail = ({ product }) => {

  const { id } = useParams()
  const filterProduct = product.filter((product) => product.id == id)
  return (
    <div>

      {filterProduct.map((p) => {

        return (

          <div key={p.id}>
            <Card maxW='sm' bg='#F7E3AF'>
              <CardBody>
                <Image
                  src={product.image}

                  borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                  <Heading size='md'>{product.tittle}</Heading>
                  <Text>
                    {product.description}
                  </Text>
                  <Text>
                    {product.category}
                  </Text>
                  <Text color='blue.600' fontSize='2xl'>
                    ${product.price}
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <ButtonGroup spacing='2'>
                  <Button variant='solid' colorScheme='blue'>
                    Comprar
                  </Button>
                  <ItemCount />
                </ButtonGroup>
              </CardFooter>

            </Card>
          </div>
        )

      }

      )}

    </div>
  )

}

export default ItemDetail