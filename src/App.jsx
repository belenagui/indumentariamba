import { BrowserRouter,Routes, Route } from 'react-router-dom'
import React from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import Cart from "./components/Cart"
import { CartProvider } from './Context/CartContext'



const App = () => {
  document.body.style.backgroundColor ='#FCEADE'
return (
  <CartProvider>
    <BrowserRouter>
      <NavBar/>

      <Routes>

        <Route exact path="/" element={<ItemListContainer greating={"Bienvenido a Mba moda"} />}/>
        <Route path="/category/:category" element={<ItemListContainer />}/>
        <Route exact path="/item/:id" element={<ItemDetailContainer/>}/>
        <Route exact path="/Cart" element={<Cart/>}/>

      </Routes>
   </BrowserRouter>

  </CartProvider>

  )
}

export default App

