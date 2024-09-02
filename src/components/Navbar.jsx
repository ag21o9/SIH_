// import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
    return (
        <nav className="bg-blue-800 text-white py-4 px-6 shadow-lg">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">Constitution Hub</h1>
            <div>
              <Link to="/" className="px-3 py-2 rounded hover:bg-blue-700 transition duration-300">Home</Link>
              <Link to="/about" className="px-3 py-2 rounded hover:bg-blue-700 transition duration-300">About</Link>
              <Link to="/contact" className="px-3 py-2 rounded hover:bg-blue-700 transition duration-300">Contact</Link>
            </div>
          </div>
        </nav>
      );
}

export default Navbar
