import React from 'react'
import './App.css'
import Header from './components/header/Header'
import Home from './Home'
import Footer from './components/footer/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Shop from './components/shop/Shop'
import { ProductProvider } from './components/context/ProductContext'
import Cart from './components/cart/Cart'
import About from './components/about/About'



const App = () => {
  return (
    <div>
      <ProductProvider>
      <BrowserRouter>
      <Header/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Shop' element={<Shop/>}/>
      <Route path='/Cart' element={<Cart/>}/>
      <Route path='/About' element={<About/>}/>
      
      </Routes>
      <Footer/>
      </BrowserRouter>
      </ProductProvider>
   
    </div>
  )
}

export default App