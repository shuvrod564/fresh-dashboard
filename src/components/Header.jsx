import React from 'react'
import { PiChatText } from 'react-icons/pi'
import { SlBell } from 'react-icons/sl' 
import { HiMiniBars3 } from "react-icons/hi2";
import { Link } from 'react-router-dom';

function Header(props) { 

  return (
    <nav className='py-3 lg:py-4 flex justify-between items-center w-full'>
        <div className="inline-flex gap-3 lg:hidden">
            <button type='button' onClick={props.toggleMenu} className="btn text-2xl">
                <HiMiniBars3 />
            </button>
            <Link to={'/'} className="inline-block">
                <img 
                    src={'/images/logo.png'} 
                    alt={'logo'} 
                    className='w-auto h-10'  
                />
            </Link>
        </div>
        <div className="hidden lg:block">
            <h1 className='text-2xl font-bold text-color-dark'>Welcome to Fresh Dashboard.</h1>
            <p className='text-color-muted'>Hello Shuvro, Welcome back!</p>
        </div>
        <div className="flex justify-end gap-4">
            <button className="w-10 h-10 flex items-center justify-center rounded-md shadow-[0_10px_10px_rgba(0,0,0,0.14)] text-color-nav-link hover:text-white hover:bg-color-primary">
                <PiChatText className='text-2xl' />
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-md shadow-[0_10px_10px_rgba(0,0,0,0.14)] text-color-nav-link hover:text-white hover:bg-color-primary">
                <SlBell className='text-lg' />
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-md shadow-[0_10px_10px_rgba(0,0,0,0.14)] text-color-nav-link hover:text-white hover:bg-color-primary">
                <img 
                    src="/images/profile-thumbnail.png" 
                    width={'40'} height={'40'} alt="Profile Image" 
                    className="rounded-md"
                />
            </button>
        </div>
    </nav>
  )
}

export default Header