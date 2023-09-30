import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import { Catalogue } from './Components/Catalogue'
import { Cart } from './Components/Cart'
import { Navbar } from './Components/Navbar'

function App() {
  

  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Catalogue/>}/>
      <Route path="/cart" element={<Cart/>}/>
      
     </Routes>
      </BrowserRouter>
     
    </div>
  )
}

export default App
