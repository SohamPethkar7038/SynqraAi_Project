import React from 'react'
import { useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'
import { ArrowRight } from 'lucide-react'
import { useClerk, UserButton, useUser } from '@clerk/clerk-react'

const Navbar = () => {
  const navigate = useNavigate()
  const { user } = useUser()
  const { openSignIn } = useClerk()

  return (
    <div className='fixed top-0 left-0 z-50 w-full backdrop-blur-md bg-white/70 border-b border-gray-100 flex justify-between items-center py-3.5 px-4 sm:px-12 xl:px-32'>
      {/* Logo */}
      <img
        src={assets.logo}
        alt="logo"
        className='w-28 sm:w-32 lg:w-36 cursor-pointer'
        onClick={() => navigate('/')}
      />

      {/* Navigation Links */}
      <div className='hidden md:flex items-center gap-8 font-medium text-gray-700 text-sm'>
        <button onClick={() => navigate('/')} className='cursor-pointer hover:text-primary transition'>
          Services
        </button>
        <button onClick={() => navigate('/')} className='cursor-pointer hover:text-primary transition'>
          Plans
        </button>
        <button onClick={() => navigate('/')} className='cursor-pointer hover:text-primary transition'>
          Contact
        </button>
      </div>

      {/* User Avatar / Get Started */}
      <div>
        {user ? (
          <UserButton />
        ) : (
          <button
            onClick={openSignIn}
            className='flex items-center gap-1.5 rounded-full text-xs sm:text-sm cursor-pointer bg-primary text-white px-5 py-2 hover:opacity-90 transition'
          >
            Get Started
            <ArrowRight className='w-4 h-4' />
          </button>
        )}
      </div>
    </div>
  )
}

export default Navbar