import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  // State to manage the toggle
  const [isOpen, setIsOpen] = useState(false);

  // Function to close the menu
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-white text-[#0079A0] font-bold shadow-lg sticky top-0 z-40">
      <div className="container mx-auto px-4 py-5 flex items-center justify-between">
      <Link to="/" onClick={closeMenu}>
        <img src="refyndata.png" alt="logo" className="h-10" />
      </Link>
        <div className="hidden md:flex space-x-4">
          <a href="/" className="hover:bg-gray-200 px-3 py-2 rounded-md"><Link to="/">Home</Link></a>
          <a href="/about" className="hover:bg-gray-200 px-3 py-2 rounded-md"><Link to="/about">About us</Link></a> 
          <a href="/clients" className="hover:bg-gray-200 px-3 py-2 rounded-md"><Link to="/services">Services</Link></a>
          <a href="/services" className="hover:bg-gray-200 px-3 py-2 rounded-md"><Link to="/careers">Careers</Link></a>
          <a href="/careers" className="hover:bg-gray-200 px-3 py-2 rounded-md"><Link to="/clients">Clients</Link></a>
          <a href="/contact" className="hover:bg-gray-200 px-3 py-2 rounded-md"><Link to="/contact">Contact us</Link></a>
        </div>
        {/* Hamburger icon */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
      {/* Mobile menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <a href="/" className="hover:bg-gray-200 px-3 py-2 rounded-md"><Link to="/" onClick={closeMenu}>Home</Link></a>
        <a href="#about" className="hover:bg-gray-200 block px-3 py-2 rounded-md"><Link to="/about" onClick={closeMenu}>About us</Link></a>
        <a href="#services" className="hover:bg-gray-200 block px-3 py-2 rounded-md"><Link to="/services" onClick={closeMenu}>Services</Link></a>
        <a href="#careers" className="hover:bg-gray-200 block px-3 py-2 rounded-md"><Link to="/careers" onClick={closeMenu}>Careers</Link></a>
        <a href="#clients" className="hover:bg-gray-200 block px-3 py-2 rounded-md"><Link to="/clients" onClick={closeMenu}>Clients</Link></a>
        <a href="#contact" className="hover:bg-gray-200 block px-3 py-2 rounded-md"><Link to="/contact" onClick={closeMenu}>Contact us</Link></a>
      </div>
    </nav>
  );
}

export default Navbar;
