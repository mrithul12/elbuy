import React from 'react'
import './App.css'
import Header from './components/header/Header'
import Home from './Home'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Shop from './components/shop/Shop'
import { ProductProvider } from './components/context/ProductContext'
import Cart from './components/cart/Cart'
import About from './components/about/About'
import Navbar from './components/navbar/Navbar'
import Reviws from './components/reviews/Reviws'
import ContactUs from './components/contact/Contact'
import ProductDetails from './components/productDetails/ProductDetails'



const App = () => {
  return (
    <div>
      <ProductProvider>
      <BrowserRouter>
      <Navbar/>
      <Header />
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Shop' element={<Shop/>}/>
      <Route path='/Cart' element={<Cart/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Reviws' element={<Reviws/>}/>
      <Route path='/Contact' element={<ContactUs/>}/>
      <Route path='/ProductDetails' element={<ProductDetails/>}/>
      
      
      </Routes>
     
      </BrowserRouter>
      </ProductProvider>
   
    </div>
  )
}

export default App