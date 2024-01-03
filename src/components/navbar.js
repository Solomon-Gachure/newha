import React, { useState } from 'react'
import {MdAccountCircle, MdMenu, MdOutlineClose} from 'react-icons/md'
import { Link } from 'react-scroll';
const Navbar = () => {
  
    const [menu, setMenu]=useState(false)
    const handleClick=()=>{
        setMenu(true)
    }
    const handleClose=()=>{
        setMenu(false)
    }
  return (
    <div className='w-full h-full '>
        <div className='flex justify-between bg-stone-900  w-full  p-2'>
            <h1 className='font-bold text-lime-400 text-2xl'>HearthStone Apartments</h1>
            <div>
                {/**links to the pages */}
                <ul className='hidden md:flex items-center gap-3 text-white  text-xl'>
                    <Link activeClass="active" to="home"  smooth={true} offset={50} duration={500} >
      <li className='cursor-pointer'>Home</li>
    </Link>
    <Link activeClass="active" to="about"  smooth={true} offset={50} duration={500} >
      <li className='cursor-pointer'>About</li>
    </Link>
    <Link activeClass="active" to="services"  smooth={true} offset={50} duration={500} >
      <li className='cursor-pointer'>Services</li>
    </Link>
              <Link activeClass="active" to="feedback"  smooth={true} offset={50} duration={500} >
      <li className='cursor-pointer'>Feedback</li>
    </Link>      
    
{/**account menu */}
                <MdAccountCircle className='text-white font-bold cursor-pointer' size={30}/>
                </ul>
            </div>
            {/**harmburger menu */}
            <div className=' md:hidden'>
                <MdMenu onClick={handleClick} className='text-white font-bold cursor-pointer' size={30}/>
            </div>
        </div>
        {/**menu */}
        {
            menu &&
            <div>
              
                <ul className='md:hidden flex flex-col fixed w-[200px] h-full bg-stone-900 p-2 pt-2 gap-3 z-50 top-0 text-white text-xl ease-in-out duration-500'>
                    <MdOutlineClose onClick={handleClose} className='text-white font-bold cursor-pointer' size={30}/>
                    <Link activeClass="active" to="home"  smooth={true} offset={50} duration={500} >
      <li className='cursor-pointer'>Home</li>
    </Link>
    <Link activeClass="active" to="about"  smooth={true} offset={50} duration={500} >
      <li className='cursor-pointer'>About</li>
    </Link>
    <Link activeClass="active" to="services"  smooth={true} offset={50} duration={500} >
      <li className='cursor-pointer'>Services</li>
    </Link>
              <Link activeClass="active" to="feedback"  smooth={true} offset={50} duration={500} >
      <li className='cursor-pointer'>Feedback</li>
    </Link>      
                    <MdAccountCircle className='text-white font-bold cursor-pointer' size={30}/>

                </ul>
            </div>
        }
    </div>
  )
}

export default Navbar