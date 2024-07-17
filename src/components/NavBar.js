import React, { useState, useEffect } from "react";
import { MdDarkMode, MdOutlineLightMode, MdMenuOpen, MdOutlineClose } from "react-icons/md";

export default function NavBar() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  const navClass = 'p-4';
  const iconSize = 24;
  const linkClass = 'inline underline-animation'

  const NavItems = () => (
    <>
      <span><a href='#about' className={linkClass}>About</a></span>
      <span><a href='#projects' className={linkClass}>Projects</a></span>
      <span><a href='#blogs' className={linkClass}>Blogs</a></span>
      <span><a href='#contact' className={linkClass}>Contact</a></span>
    </>
  );

  return (
    <>
      <nav className={`sticky top-0 w-full z-20 transition-colors duration-300 ${scrolled ? 'bg-white dark:bg-gray-800 shadow-md' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <button 
            className="md:hidden"
            onClick={() => setIsDrawerOpen(!isDrawerOpen)}
          >
            <MdMenuOpen size={iconSize} />
          </button>
          <div className="hidden md:flex space-x-8">
            <NavItems />
          </div>
          <button 
            className={`${navClass} cursor-pointer`} 
            onClick={() => setIsDarkMode(!isDarkMode)}
          >
            {isDarkMode ? <MdOutlineLightMode size={iconSize} /> : <MdDarkMode size={iconSize} />}
          </button>
        </div>
      </nav>

      {/* Side Drawer */}
      <div className={`fixed inset-y-0 left-0 z-30 w-64 bg-white dark:bg-gray-800 shadow-lg transform ${isDrawerOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
        <div className="p-4">
          <button 
            className="absolute top-4 right-4"
            onClick={() => setIsDrawerOpen(false)}
          >
            <MdOutlineClose size={iconSize} />
          </button>
          <div className="mt-10 flex flex-col space-y-8">
            <NavItems />
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isDrawerOpen && (
        <div 
          className="fixed inset-0 z-20 bg-black bg-opacity-50"
          onClick={() => setIsDrawerOpen(false)}
        ></div>
      )}
    </>
  );
}