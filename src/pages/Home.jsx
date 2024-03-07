import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-teal-500">
          <h1 className="text-3xl text-white">Welcome to Jeevansathi</h1>
          <Link to="/admin">Admin Panel</Link>
        </div>
      )      
}

export default Home