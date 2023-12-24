import React from 'react'

const Event = () => {
  return (
    <>
    <div className="event-card" data-aos="fade-up" data-aos-duration="800">
          <h3 className="text-xl lg:text-2xl font-bold mb-2">Event Title</h3>
          <p className="text-gray-600">Date: March 15, 2023</p>
          <p className="text-gray-600">Time: 7:00 PM</p>
          <a href="#"
             className="text-blue-500 hover:underline inline-block mt-3 transition-colors duration-300">Learn
            More</a>
        </div>
    </>
  )
}

export default Event