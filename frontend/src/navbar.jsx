import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md dark:bg-gray-800 fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-800 dark:text-white">Portfolio</h1>
        <ul className="hidden md:flex space-x-6">
          <li><a href="#home" className="text-gray-600 dark:text-gray-300 hover:text-blue-500">Accueil</a></li>
          <li><a href="#about" className="text-gray-600 dark:text-gray-300 hover:text-blue-500">À propos</a></li>
          <li><a href="#projects" className="text-gray-600 dark:text-gray-300 hover:text-blue-500">Projets</a></li>
          <li><a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-blue-500">Contact</a></li>
        </ul>
        <div className="md:hidden">
          <button className="text-gray-600 dark:text-gray-300 focus:outline-none">
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path d="M4 6H20V8H4zM4 11H20V13H4zM4 16H20V18H4z" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
