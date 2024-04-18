import React from 'react'
import { useContext, useState } from 'react'
import { CartContext } from '../Context/CartContext'
import { useNavigate } from 'react-router-dom'
import { sendOrder } from '../firebase/firebase'
import Swal from 'sweetalert2'

const Checkout = () => {
  const {cart, emptyCart, totalPrice, quantityInCart } = useContext(CartContext);
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);
  const orderedProducts = cart.map((product)=>{
    return{
      tittle: product.title,
      quantity: product.quantity,
      price: product.price,
      id: product.id,
    }
  }
  )

  const send = async (data) =>{
    setLoading(true)
    const date = new date()
    const order = {
      buyer: {
        name: data.name,
        lastName: data.lastName,
        phone:data.phone,
        mail: data.mail,
      },
      order: orderedProducts,
      date: date,
      total: totalPrice,
    }

     let purchaseId = await sendOrder(order);
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: "btn btn-success",
          cancelButton: "btn btn-danger"
        },
        buttonsStyling: false
  });
      swalWithBootstrapButtons.fire({
        title: "Estás seguro de confirmar esta compra?",
        text: "se realizará el pago correspondiente",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "si, confirmar",
        cancelButtonText: "No, cancelar!",
        reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
      navigate("/")
      emptyCart()
      setLoading(false)
      swalWithBootstrapButtons.fire({
        title: "Confirmado!",
        text: `Genial ${data.name} se realizó tu compra el dia ${date.getDay()}/${date.getMonth()}.
        Recordá que tu Id de compra es ${purchaseId}`,
        icon: "success"
      });
    } else if (
      result.dismiss === Swal.DismissReason.cancel
    ) {
      navigate("/Cart")
      swalWithBootstrapButtons.fire({
        title: "Cancelado",
        text: "Tu orden fue cancelada",
        icon: "error"
      });
    }
  });

  return (
    <div>Checkout</div>
  )
}
}

export default Checkout