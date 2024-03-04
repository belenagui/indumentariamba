import React from 'react'

const ItemListContainer = ({greeting}) => {
  return (
   <div id="ItemListContainer">
    <img src="/src/assets/banner.png" alt="mujer con ropa de invierno"/>
      <h1>{greeting}</h1>
   </div>
  )
}

export default ItemListContainer