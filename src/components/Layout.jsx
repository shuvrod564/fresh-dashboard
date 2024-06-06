import React, { useState } from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
import Header from './Header'

function Layout() {
  const [resMenu, setSetMenu] = useState(false);

  const toggleMenu = () => {
    setSetMenu(!resMenu);
  }
  const closeMenu = () => {
    setSetMenu(!resMenu);
  }
  

  return (
    <div className="flex flex-row bg-color-body-bg min-h-screen"> 
        <Sidebar 
          closeMenu={closeMenu}
          resMenu={resMenu}
        />
        <div className="col lg:px-8 md:px-5 px-4">
            <Header
              toggleMenu={toggleMenu}
              setSetMenu={setSetMenu}
              resMenu={resMenu}
            />
            <div className="py-5"> 
              <Outlet />
            </div>
        </div>
    </div>
  )
}

export default Layout