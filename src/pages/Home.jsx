import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-teal-500">
      <h1 className="text-4xl text-white mb-6 font-bold">Welcome to Jeevansathi</h1>
      <Link to="/admin" className="text-white text-lg underline hover:text-teal-300">Go to Admin Panel</Link>
    </div>
  )
}

export default Home