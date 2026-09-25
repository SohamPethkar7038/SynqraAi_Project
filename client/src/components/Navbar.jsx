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

    <div className='fixed z-5 w-full backdrop-blur-2xl flex justify-between items-center py-3 px-4 sm:px-20 xl:px-32 md: mt-3'>

      {/* Logo */}
      <img
        src={assets.logo}
        alt="logo"
        className='w-32 sm:w-36 lg:w-40 xl:w-44 pt-1 cursor-pointer'
        onClick={() => navigate('/')}
      />

      {/* Navigation Links */}
      <div className='hidden md:flex ml-20 items-center gap-8 font-medium'>

        <button
          onClick={() => navigate('/')}
          className='cursor-pointer hover:text-primary transition'
        >
          Services
        </button>

        <button
          onClick={() => navigate('/')}
          className='cursor-pointer hover:text-primary transition'
        >
          Plans
        </button>

        <button
          onClick={() => navigate('/')}
          className='cursor-pointer hover:text-primary transition'
        >
          Contact
        </button>

      </div>

      {/* User Avatar / Get Started */}
      {
        user
          ? <UserButton />
          :
          (
            <button
              onClick={openSignIn}
              className='flex items-center gap-1.5 rounded-full text-xs sm:text-sm cursor-pointer bg-primary text-white px-5 sm:px-3 lg:px-8 py-2 sm:py-2.5'
            >
              Get Started
              <ArrowRight className='w-4 h-4' />
            </button>
          )
      }

    </div>
  )
}

export default Navbar


