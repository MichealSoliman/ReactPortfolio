import React from 'react'
import {BrowserRouter as Router, Switch ,Route } from "react-router-dom"
import Header from '../common/header/Header'
import Home from '../home/Home'
import { About } from './about/About'
import Services from '../home/services/Services'
import Portfolio  from '../pages/portfolio/Portfolio'
import Testimon from './testimon/Testimon'
import Blog from './blog/Blog'
import Contact from './contact/Contact'
import Footer from '../common/Footer'



const Pages = () => {
  return (
    <>
      <Router>
        <Header/>
        <Switch>
           <Route exact path='/' component ={Home}/>
           <Route exact path='/about' component={About} />
           <Route exact path='/services' component={Services} />
           <Route exact path='/portfolio' component={Portfolio} />
           <Route exact path='/testimonials' component={Testimon} />
           <Route exact path='/blog' component={Blog} />
           <Route exact path='/contact' component={Contact} />

        </Switch>
        <Footer/>
        </Router>
    </>
  )
}

export default Pages
