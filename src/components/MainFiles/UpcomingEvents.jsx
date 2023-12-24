import React from 'react'
import "../cssfiles/Event.css"
import Event from '../Events/Event'

const UpcomingEvents = () => {
  return (
    <section id="events" className="bg-gray-100 py-12">
    <div className="container mx-auto text-center" data-aos="fade-up" data-aos-duration="800">
      <h2 className="text-3xl lg:text-4xl font-bold mb-8">Upcoming Events</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Example event card */}
        <Event/>
        <Event/>
        <Event/>
        {/* Repeat similar cards for other events */}
      </div>
    </div>
  </section>
  )
}

export default UpcomingEvents