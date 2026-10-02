import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <footer className="px-6 md:px-16 lg:px-24 xl:px-32 pt-12 w-full text-gray-500 bg-white border-t border-gray-100">
      <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-200/60 pb-10">
        
        {/* Brand / Logo Section */}
        <div className="md:max-w-96">
          {/* Clean text logo matching your Navbar */}
          <div className="flex items-center gap-2">
            <img src={assets.logo} alt="Synqra Ai Logo" className='h-10 w-auto' />
            
          </div>

          <p className="mt-4 text-sm leading-relaxed text-gray-600">
            Unlock your creative potential with our advanced AI toolkit. Draft flawless articles, generate stunning images, and optimize your workflow.
          </p>
        </div>

        {/* Links & Newsletter Section */}
        <div className="flex-1 flex flex-col sm:flex-row items-start md:justify-end gap-12 lg:gap-20">
          <div>
            <h2 className="font-semibold mb-4 text-gray-800 text-base">Company</h2>
            <ul className="text-sm space-y-2.5">
              <li><a href="#" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">About us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacy policy</a></li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold text-gray-800 mb-4 text-base">Subscribe to our newsletter</h2>
            <div className="text-sm space-y-3">
              <p className="text-gray-600">The latest news, articles, and resources, sent to your inbox weekly.</p>
              <div className="flex items-center gap-2 pt-2">
                <input 
                  className="border border-gray-300 placeholder-gray-400 focus:ring-2 focus:ring-primary outline-none w-full max-w-64 h-10 rounded-lg px-3 text-sm" 
                  type="email" 
                  placeholder="Enter your email"
                />
                <button className="bg-primary hover:bg-primary/90 transition-colors w-28 h-10 text-white rounded-lg font-medium shadow-sm cursor-pointer">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <p className="py-6 text-center text-xs md:text-sm text-gray-500">
        Copyright 2026 © <span className="font-medium text-gray-700">SynqraAi</span>. All Rights Reserved.
      </p>
    </footer>
  )
}

export default Footer