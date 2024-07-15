import { useState, useEffect } from "react";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";

export default function NavBar(){
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
      if (isDarkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }, [isDarkMode]);

    const liClass = 'inline-block p-6';
    const iconSize = 20;

    return (
        <nav className="flex justify-center align-middle sticky top-0 w-100 z-10 backdrop-blur-3xl backdrop-filter transition-all duration-300 ease-in-out">
            <ul>
                <li className={liClass}><a href='#about' className='underline-animation'>About</a></li>
                <li className={liClass}><a href='#projects' className='underline-animation'>Projects</a></li>
                <li className={liClass}><a href='#blogs' className='underline-animation'>Blogs</a></li>
            </ul>
            <div className={`mr-0 cursor-pointer ${liClass}`} onClick={() => setIsDarkMode(val => !val)}>{isDarkMode ? <MdOutlineLightMode size={iconSize}/> : <MdDarkMode size={iconSize}/>}</div>
        </nav>
        
    )
}