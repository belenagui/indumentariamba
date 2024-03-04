import React from 'react'
import { useState } from 'react'
import "./ItemCount.css"

const ItemCount = ({stock, onAdd}) => {
    const [contador, setContador] = useState(1)

    const sumar = () =>{
        setContador(contador + 1)
    }

    const restar = () =>{
        setContador(contador - 1)
    }



    return (
    <div>
        <button onClick={sumar}>+</button>
        <p>{contador}</p>
        <button onClick={restar}>-</button>
        <button onClick={onAdd}>Terminar compra</button>



    </div>
  )
}

export default ItemCount