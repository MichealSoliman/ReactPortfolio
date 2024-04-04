import React from 'react'
import Hero from '../home/hero/Hero'
import { About } from '../pages/about/About'
import Services from './services/Services'
import Counter from '../pages/counter/Counter'
import Portfolio from '../pages/portfolio/Portfolio'
import Testimon from '../pages/testimon/Testimon.js'
import Blog from '../pages/blog/Blog.js'
import Contact from '../pages/contact/Contact.js'



const Home = () => {
    return(
        <>
        <Hero/>
        <About/>
        <Services/>
        <Counter/>
        <Portfolio/>
        <Testimon/>
        <Blog/>
        <Contact/>
        
    </>
    )
   
}

export default Home
