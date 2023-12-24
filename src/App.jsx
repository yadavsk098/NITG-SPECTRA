import { useState } from 'react'
import NavBar from './components/MainFiles/NavBar'
import HeroSection from './components/MainFiles/HeroSection'
import UpcomingEvents from './components/MainFiles/UpcomingEvents'
import Slider from './components/MainFiles/Slider'
import AboutUs from './components/MainFiles/AboutUs'
import Footer from './components/MainFiles/Footer'
import ContactUs from './components/MainFiles/ContactUs'
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
    <HeroSection/>
    <UpcomingEvents/>
    <Slider/>
    <AboutUs/>
    <ContactUs/>
    <Footer/>
   </>
  )
}

export default App
