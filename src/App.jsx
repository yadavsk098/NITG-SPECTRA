import { useState } from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import UpcomingEvents from './components/UpcomingEvents'
import Slider from './components/Slider'
import AboutUs from './components/AboutUs'
import './App.css'

// NavBar
// Hero
// Upcoming
// slider
// aboutus

function App() {

  return (
   <>
    <NavBar/>
    <Hero/>
    <UpcomingEvents/>
    <Slider/>
    <AboutUs/>

   </>
  )
}

export default App
