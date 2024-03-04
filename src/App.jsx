import React from 'react'
import NavBar from './components/NavBar'
import CartWidget from './components/CartWidget'
import "./main.css"
import ItemListContainer from './components/ItemListContainer'
import ItemCount from './components/ItemCount/ItemCount'


const App = () => {
  document.body.style.backgroundColor ='#242a30'
return (
  <div id="app">
     <NavBar/>
    
    <ItemListContainer greeting="Bienvenidos a MBA moda" />
    <ItemCount stock={10} onAdd={()=> alert (`Cantidad agregada ${contador}`)}/>
  </div>
  );
}

export default App

