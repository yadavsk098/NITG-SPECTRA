import React from 'react'
import "../cssfiles/Hero.css"
const HeroSection = () => {
  return (
    <section className="hero-container text-white py-24 text-center relative" data-aos="fade-up" data-aos-duration="1000">
      <div className="container mx-auto">
        <h1 className="text-4xl lg:text-6xl font-bold mb-4 leading-tight">
          Welcome to Spectra Club
        </h1>
        <p className="text-lg lg:text-xl">
          Explore the intersection of technology and culture with us.
        </p>
        <a href="#about" className="bg-white text-blue-500 py-2 px-4 rounded-full inline-block mt-8 hover:bg-blue-100 transition duration-300">
          Discover More
        </a>
      </div>
      {/* Decorative element */}
      <div className="hero-deco"></div>
    </section>
  )
}

export default HeroSection