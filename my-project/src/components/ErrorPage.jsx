import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-black to-slate-950">
      <div className="text-center">
        <h1 className="mb-4 text-6xl font-extrabold text-white animate-pulse">
          4
          <span className="text-yellow-300 animate-bounce inline-block">0</span>
          4
        </h1>
        <p className="mb-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
          Oops! Page not found.
        </p>
        <p className="mb-8 text-lg text-gray-200">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="animate-glitch">
          <span className="relative inline-block px-8 py-3 text-lg font-bold text-white transition duration-300 ease-in-out bg-purple-600 rounded-full hover:bg-purple-700">
            <Link to="/">Go Home</Link>
            <span className="absolute top-0 right-0 w-4 h-4 -mt-1 -mr-1 bg-yellow-300 rounded-full animate-ping"></span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default ErrorPage