import React from 'react'
import Banner from './components/banner/Banner'
import Category from './components/category/Category'
import Blog from './components/blog/Blog'
import Slide from './components/slidebar/Slide'
import Reviws from './components/reviews/Reviws'



const Home = () => {
  return (
    <div>
        <Banner/>
        <Slide/>
        <Blog/>
        <Category/>
        <Reviws/>
      
       
      
       
    </div>
  )
}

export default Home