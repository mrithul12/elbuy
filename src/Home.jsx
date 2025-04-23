import React from 'react'
// import Banner from './components/banner/Banner'
import Category from './components/category/Category'

// import Slide from './components/slidebar/Slide'
import Reviws from './components/reviews/Reviws'
import Section from './components/section/Section'
import Box from './components/box/Box'
import Featured from './components/featured/Featured'
import Blog from './components/blog/Blog'
import Footer from './components/footer/Footer'





const Home = () => {
  return (
    <div>
        {/* <Banner/> */}
        {/* <Slide/> */}
       <Section/>
       <Box/>
       <Featured/>
        <Category/>
        <Blog/>
        <Reviws/>
         <Footer/>
      
       
      
       
    </div>
  )
}

export default Home