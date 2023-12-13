import React, { useState } from 'react'
import { PiHeartLight, PiHandbagLight, PiUserThin } from "react-icons/pi";
import { SlMenu } from "react-icons/sl";
import { CgClose } from "react-icons/cg";
const Navbar = () => {
    const navItems = [
        {title: "All", path: "/"},
        {title: "Ladies", path: "/"},
        {title: "Men", path: "/"},
        {title: "Young", path: "/"},
        {title: "Kids", path: "/"}
    ]
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    // toggle menu sm screen
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }
  return (
    <header className='w-full fixed top-0 left-0 '>
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
      <div className="cursor-pointer flex items-center font-bold">
        LOGO
        </div>
      {/* navItems */}
      <ul className={`md:flex md:items-center transition-all duration-500 ${isMenuOpen ? "" : "hidden"}`}>
        {
            navItems.map(({title, path})=>(
                <li key={title} className='md:ml-8 text-xl hover:text-Yellow cursor-pointer duration-500 md:my-0 my-7'>
                    {title}
                </li>
            ))
        }
      </ul>
      
      <div className="flex gap-3 absolute md:relative top-0 right-0 px-7 py-4">
        {/* Bag */}
        <PiHandbagLight className='text-2xl'/>
        {/* Heart */}
        <PiHeartLight className='text-2xl'/>
        {/* User */}
        <PiUserThin className='text-2xl'/>
        {/* Menu */}
        <button onClick={toggleMenu}>
            {
                isMenuOpen ? <CgClose className='md:hidden text-xl' /> : <SlMenu className='md:hidden text-xl' />
            }
        </button>
      </div>
      </div>

    </header>
  )
}

export default Navbar
