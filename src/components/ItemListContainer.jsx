import React from 'react'
import ItemList from './ItemList'


const ItemListContainer = ({greeting}) =>{


  return (
    <>
     <section>
        <h1 className="greatingTittle">{greeting}</h1>
      </section>
      <main>
        <section className="items-container">
          <ItemList></ItemList>
        </section>
        
      </main>
    </>
  )

}

export default ItemListContainer