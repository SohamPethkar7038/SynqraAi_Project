import React from 'react'
import { AiToolsData } from '../assets/assets'
import UseAuthNavigation from '../hooks/UseAuthNavigation'

const AiToolService = () => {
    const { handleProtectedNavigation } = UseAuthNavigation();

    return (
        <div className='w-full px-6 sm:px-10 lg:px-12 xl:px-24 my-12 sm:my-16'>

            {/* Section Header */}
            <div className='text-center max-w-2xl mx-auto'>
                <h2 className='text-slate-800 text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight'>
                    Powerful AI Tools
                </h2>
                <p className='text-gray-500 text-sm sm:text-base mt-3 max-w-lg mx-auto leading-relaxed'>
                    Everything you need to create, enhance, and optimize your content with cutting-edge AI technology
                </p>
            </div>

            {/* AI Tools Grid Container */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-10 sm:mt-14 max-w-7xl mx-auto justify-items-center'>
                {
                    AiToolsData.map((tool, index) => (
                        <div 
                            onClick={() => handleProtectedNavigation(tool.path)} 
                            key={index} 
                            
                            className='group relative w-full max-w-95 min-h-60 sm:min-h-65 p-6 sm:p-7 rounded-2xl bg-white shadow-sm hover:shadow-xl border border-gray-100 hover:border-gray-200 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer flex flex-col justify-start' 
                        >
                            {/* Icon */}
                            <tool.Icon 
                                className='w-12 h-12 p-2.5 text-white rounded-xl shadow-md group-hover:scale-105 transition-transform duration-300 shrink-0' 
                                style={{background: `linear-gradient(to bottom, ${tool.bg.from}, ${tool.bg.to})`}}
                            />

                            {/* Title */}
                            <h3 className='mt-4 text-lg font-semibold text-gray-900 group-hover:text-primary transition-colors duration-200'>
                                {tool.title}
                            </h3>
                            
                            {/* Description */}
                            <p className='text-gray-500 text-xs sm:text-sm mt-2  leading-relaxed'>
                                {tool.description}
                            </p>
                        </div>
                    ))
                }
            </div>
            
        </div>
    )
}

export default AiToolService