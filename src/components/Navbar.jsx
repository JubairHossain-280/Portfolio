import React, { useState } from 'react'
import { FaBars,FaXmark   } from "react-icons/fa6";
import { Link } from 'react-scroll';
 
const Navbar = () => {

  const [nav, setNav] = useState(false)

  const links = [     // Array of Links
    {
      id: 1,          // Object of Each Link
      link: 'home'
    },
    {
      id: 2,          // Object of Each Link
      link: 'about'
    },
    {
      id: 3,          // Object of Each Link
      link: 'portfolio'
    },
    {
      id: 4,          // Object of Each Link
      link: 'experience'
    },
    {
      id: 5,          // Object of Each Link
      link: 'contact'
    },
  ]
  return (
    <nav className='backdrop-blur-2xl w-full  px-8 z-10 text-white bg-black  sticky top-0 md:fixed md:bg-black/30'>
        <div className='container mx-auto flex justify-between items-center h-20'>
        <div className="logo z-10">
          <h1 className='font-signature text-white text-5xl'>Jubair</h1>
        </div>
        <ul className='hidden md:flex gap-12'>
            {links.map(({id , link}) => (
            <li key={id} className='cursor-pointer text-gray-500 capitalize font-medium hover:scale-105 hover:text-white duration-200'>
                <Link to={link} smooth duration={500}>{link}</Link>
            </li>
            ))}
        </ul>

        {/* Mobile Menu Btn */}
        <div onClick={() => setNav(!nav)} className='cursor-pointer text-gray-500 z-10 md:hidden'>
          {nav ? <FaXmark size={30}/> : <FaBars size={30}/>}
        </div>

        {/* Mobile Navigation Links */}
        {nav && (
        <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 md:hidden'>
            {links.map(({id , link}) => (
            <li key={id} className='cursor-pointer text-gray-500 text-4xl capitalize font-medium py-6 hover:scale-105 hover:text-white duration-200'>
                <Link onClick={() => setNav(!nav)} to={link} smooth duration={500}>{link}</Link>
            </li>
            ))}
        </ul>
        )}

        </div>

    </nav>
  )
}

export default Navbar