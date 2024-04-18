import { createContext, useState} from 'react';
//Creacion del context que se va a consumir//
export const CartContext = createContext();
//Creacion del provider//
export function CartProvider({ children}){
    const [cart, setCart] = useState([]);
    const quantityInCart = cart.reduce(
        (acc,product)=> acc + product.quantity,
        0 //comienza en cero//
    );

    const emptyCart = ()=>{
        setCart([]);
    }

    const totalPrice = cart.reduce(
        (acc, product) => acc + product.quantity * product.price,
        0
    );

    const deleteProduct = (id)=>{
        setCart(cart.filter((product)=>product.id !=id));
    }

    const addProduct = (id, quantity)=>{
        const updateCartInfo = cart.map(product =>
            product.id ===id? {...product, quantity: quantity+1 } : product
        );
        setCart(updateCartInfo);
    }

    const subtractProduct = (id, quantity) =>{
        const updateCartInfo = cart.map(product =>
            product.id ===id? {...product, quantity: quantity-1 } : product
        );
        setCart(updateCartInfo);
    }

    return (
        <CartContext.Provider
          value={{
            cart,
            setCart,
            quantityInCart,
            emptyCart,
            totalPrice,
            deleteProduct,
            subtractProduct,
            addProduct
          }}
        >
          {children}
        </CartContext.Provider>
      );
}
