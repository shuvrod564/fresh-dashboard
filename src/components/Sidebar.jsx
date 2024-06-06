import React from 'react'
import { BsTruck } from 'react-icons/bs'
import { FiArrowLeft } from 'react-icons/fi'
import { MdOutlineExplore } from 'react-icons/md'
import { RxDashboard } from 'react-icons/rx'
import { TfiCup } from 'react-icons/tfi'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  {
    title: 'Dashbaord',
    slug: '/',
    icon: <RxDashboard className='text-xl' />
  },
  {
    title: 'My Orders',
    slug: '/orders',
    icon: <BsTruck className='text-xl' />
  },
  {
    title: 'Explore',
    slug: '#',
    icon: <MdOutlineExplore className='text-[22px]' />
  },
  {
    title: 'Featured Products',
    slug: '#',
    icon: <TfiCup className='text-[22px]' />
  },
]

function Sidebar(props) {
  const pathname = useLocation();
  
  return (
    <aside className={`main__side__nav max-w-[240px] min-h-screen w-full bg-white shadow-md lg:block ${props.resMenu ? 'open' : ''}`}>
        <Link to={'/'} className="hidden lg:inline-block p-5">
            <img 
                src={'/images/logo.png'} 
                alt={'logo'} 
                className='w-auto h-14'  
            />
        </Link>
        <div className=" bg-slate-100 px-4 pb-2 pt-3 lg:hidden">
          <button type='button' onClick={props.closeMenu} className="btn text-xl leading-[1]">
            <FiArrowLeft />
          </button>
        </div>
        <div className="mt-10">
          <ul className="links flex flex-col gap-y-2">
            {
              navLinks.map((link, index) => (
                <li key={index}>
                  <Link to={`${link.slug}`} className={`link flex items-center gap-3 px-4 py-1.5 relative
                    ${pathname.pathname === link.slug ? ' text-color-primary' : 'text-color-nav-link hover:text-color-primary'}
                  `}>
                    <span className="icon">{link.icon}</span>
                    {link.title}

                   
                   {
                    pathname.pathname === link.slug && (
                      <span className='absolute top-0 left-0 w-1 h-full bg-color-primary rounded-tr-lg rounded-br-lg'></span>

                    )
                    
                   } 
                  </Link>
                </li>
              ))
            }
          </ul>
        </div>
    </aside>
  )
}

export default Sidebar