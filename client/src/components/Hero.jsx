import React from 'react'
import { assets } from '../assets/assets';
import UseAuthNavigation from '../hooks/UseAuthNavigation';





export const Hero = () => {
    const { handleProtectedNavigation } = UseAuthNavigation();

    return (
       
        <div className='relative w-full flex flex-col items-center justify-center px-4 sm:px-8 lg:px-16 xl:px-20 pt-36 sm:pt-40 pb-10 bg-[url(/gradientBackground.png)] bg-cover bg-center bg-no-repeat'>

            {/* Main Content Container */}
            <div className='text-center max-w-4xl mx-auto flex flex-col items-center'>
                
                {/* Heading */}
                <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight sm:leading-[1.15] text-gray-900'>
                    Elevate your content <br className='hidden sm:block'/> using <span className='text-primary'>AI tools</span>
                </h1>

                {/* Paragraph */}
                <p className='mt-4 sm:mt-5 max-w-xs sm:max-w-lg md:max-w-2xl text-sm sm:text-base md:text-lg leading-relaxed text-gray-600'>
                    Unlock your creative potential with our advanced AI toolkit. 
                    Draft flawless articles, generate stunning images, and optimize your workflow.
                </p>

                {/* Button to redirect */}
                <div className='mt-6 sm:mt-7'>
                    <button
                        onClick={() => handleProtectedNavigation('/ai')} 
                        className='bg-primary text-white px-7 sm:px-9 md:px-10 py-3 sm:py-3.5 rounded-lg text-sm sm:text-base hover:scale-105 active:scale-95 transition-transform duration-200 cursor-pointer shadow-md'>
                        Start creating now
                    </button>
                </div>

                {/* Trusted Users Info */}
                <div className='flex items-center gap-3 mt-6 sm:mt-8 text-gray-600 text-xs sm:text-sm font-medium'>
                    <img src={assets.user_group} alt="User Group" className='h-7 sm:h-8' />
                    <span>Trusted by 10k+ people</span>
                </div>

            </div>

        </div>
    )
}

export default Hero

