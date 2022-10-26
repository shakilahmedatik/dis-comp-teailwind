import React from 'react'
import { Outlet } from 'react-router-dom'
import DiscordIcon from '../assets/DiscordLogo'
import NavLink from './NavLink'
import phLogo from '../assets/logos/ph.png'

const Layout = () => {
  return (
    <div className='flex text-gray-100 h-screen'>
      <div className='bg-gray-900 p-3 space-y-2 overflow-y-scroll'>
        <NavLink to='/'>
          <DiscordIcon className='w-7 h-5' />
        </NavLink>

        <hr className='border-t-white/[.06] border-t-2 rounded mx-2' />
        {[...Array(40)].map((_, i) => (
          <NavLink to={`/server/${i}`}>
            <img src={phLogo} alt='' />
          </NavLink>
        ))}
      </div>
      <Outlet />
    </div>
  )
}

export default Layout
