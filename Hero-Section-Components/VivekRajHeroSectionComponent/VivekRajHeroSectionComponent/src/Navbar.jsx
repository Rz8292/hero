import { useState } from 'react';
import './App.css';
import CartIcon from './assets/cart.svg'; 

function Navbar() {
  return (
    <nav className="bg-gray-950 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">MyApp</div>
        <ul className="flex space-x-4 lg:space-x-8">
          {/* Navigation items */}
          <li className="text-center lg:text-left">
            <a href="#" className="block text-white hover:text-gray-600 hover:font-bold hover:shadow-lg">
              Home
            </a>
          </li>
          <li className="text-center lg:text-left">
            <a href="#" className="block text-white hover:text-gray-600 hover:font-bold hover:shadow-lg">
              About
            </a>
          </li>
          <li className="text-center lg:text-left">
            <a href="#" className="block text-white hover:text-gray-600 hover:font-bold hover:shadow-lg">
              Services
            </a>
          </li>
          <li className="text-center lg:text-left">
            <a href="#" className="block text-white hover:text-gray-600 hover:font-bold hover:shadow-lg">
              Contact
            </a>
          </li>
          {/* Cart icon */}
          <li className="ml-4 lg:ml-6 flex items-center"> {/* Added flex and items-center for vertical alignment */}
            <img src={CartIcon} alt="Cart" className="w-6 h-6 fill-current text-white hover:text-gray-300 hover:shadow-lg" />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
