import { BrowserRouter,Routes, Route } from 'react-router-dom'
import React from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import Cart from "./components/Cart"



const App = () => {
  document.body.style.backgroundColor ='#FCEADE'
return (
  <BrowserRouter>

    <NavBar/>

    <Routes>

      <Route exact path="/" element={<ItemListContainer />}/>
      <Route path="/category/:category" element={<ItemListContainer />}/>
      <Route exact path="/item/:id" element={<ItemDetailContainer/>}/>
      <Route exact path="/Cart" element={<Cart/>}/>

    </Routes>
    


  </BrowserRouter>
  )
}

export default App

