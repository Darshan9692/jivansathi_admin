import React from 'react'
import { Link } from 'react-router-dom'

const Extra = () => {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-[#ea6767]">
            <div className="text-4xl md:text-5xl lg:text-6xl text-black mb-6 font-bold text-center">Page not found !!</div>
            <Link to="/" className="text-black text-lg md:text-xl lg:text-2xl underline hover:text-blue-500">Go to Login</Link>
        </div>
    )
}

export default Extra