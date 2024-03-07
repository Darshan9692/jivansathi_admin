import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-teal-500">
      <h1 className="text-4xl md:text-5xl lg:text-6xl text-white mb-6 font-bold text-center">Welcome to Jeevansathi</h1>
      <Link to="/admin" className="text-white text-lg md:text-xl lg:text-2xl underline hover:text-teal-300">Go to Admin Panel</Link>
    </div>
  )
}

export default Home