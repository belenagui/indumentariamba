import React from 'react'
import { useContext, useState } from 'react'
import { CartContext } from '../Context/CartContext'
import { useNavigate } from 'react-router-dom'
import { sendOrder } from '../firebase/firebase'
import Swal from 'sweetalert2'
import { Button, Spinner, Heading, Text, Stack, FormControl, Input, FormLabel} from '@chakra-ui/react'



const Checkout = () => {
  const {cart, emptyCart, totalPrice, quantityInCart } = useContext(CartContext);
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    phone: '',
    mail: ''
});

const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData({ ...formData, [name]: value });
};

const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  const date = new Date();
  const order = {
    buyer: {
      name: formData.name,
      lastName: formData.lastName,
      phone: formData.phone,
      mail: formData.mail,
    },
    order: cart.map((product) => ({
      title: product.title,
      quantity: product.quantity,
      price: product.price,
      id: product.id,
    })),
    date: date,
    total: totalPrice,
  };

  try {
    const purchaseId = await sendOrder(order);
    await Swal.fire({
      title: 'Confirmado!',
      text: `Genial ${formData.name}, se realizó tu compra el día ${date.getDate()}/${date.getMonth() + 1}. Recordá que tu Id de compra es ${purchaseId}`,
      icon: 'success',
    });
    navigate('/');
    emptyCart();
  } catch (error) {
    console.error('Error al enviar la orden:', error);
    Swal.fire({
      title: 'Error',
      text: 'Hubo un error al procesar tu orden. Por favor, inténtalo de nuevo más tarde.',
      icon: 'error',
    });
  } finally {
    setLoading(false);
  }
};

  return (
    <>
     <div className='resumen-checkout'>
     <Stack mt='6' spacing='3'>
                  <Heading size='xl'> Resumen de tu compra"</Heading>
                  <Text>
                    Cantidad de productos: {quantityInCart}
                  </Text>
                  <Text>
                    Precio final: ${totalPrice}
                  </Text>
      </Stack>
      </div>

      <div className='form-checkout'>
                <Stack mt='6' spacing='3'>
                    <Heading size='md'>Ya casi es tuyo ! Ingresa tus datos</Heading>
                    <form onSubmit={handleSubmit}>
                        <FormControl id='name'>
                            <FormLabel>Nombre</FormLabel>
                            <Input type='text' name='name' value={formData.name} onChange={handleChange} />
                        </FormControl>
                        <FormControl id='lastName'>
                            <FormLabel>Apellido</FormLabel>
                            <Input type='text' name='lastName' value={formData.lastName} onChange={handleChange} />
                        </FormControl>
                        <FormControl id='phone'>
                            <FormLabel>Teléfono</FormLabel>
                            <Input type='text' name='phone' value={formData.phone} onChange={handleChange} />
                        </FormControl>
                        <FormControl id='mail'>
                            <FormLabel>Correo electrónico</FormLabel>
                            <Input type='email' name='mail' value={formData.mail} onChange={handleChange} />
                        </FormControl>
                        <Button type='submit' colorScheme='blue' isLoading={isLoading}>
                            {isLoading ? <Spinner size='m' color='white' /> : 'Confirmar compra'}
                        </Button>
                    </form>
                </Stack>
            </div>
    </>
  )
}

export default Checkout