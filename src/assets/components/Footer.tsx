import React from 'react';
import Logo from '../logo.png'
const Footer = () => {
  return (
    <footer className="bg-[#060A17] text-white pt-40 relative mt-48 font-sans">
      
      {/* --- Floating Newsletter Section --- */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl px-4">
        {/* Outer border container */}
        <div className="border border-white/20 rounded-[2rem] p-4 bg-[#060A17]/80 backdrop-blur-sm">
          
          {/* 
            Inner Card: ADD YOUR BACKGROUND IMAGE HERE 
            Example: className="... bg-[url('/path/to/your-image.png')] bg-cover bg-center"
          */}
          <div 
            className="rounded-2xl py-16 px-6 text-center shadow-2xl text-gray-900 bg-gradient-to-br from-blue-50 via-white to-orange-50 relative overflow-hidden"
          >
            <h2 className="text-3xl font-bold mb-3">Subscribe to our Newsletter</h2>
            <p className="text-gray-600 mb-8 font-medium">Get the latest updates and news right in your inbox!</p>
            
            <form className="max-w-md mx-auto flex gap-3 relative z-10">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-5 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-gray-300 focus:ring-4 focus:ring-gray-100 transition-all bg-white"
              />
              <button 
                type="submit" 
                className="px-6 py-3 rounded-lg font-bold text-gray-900 bg-gradient-to-r from-pink-300 to-amber-400 hover:opacity-90 transition-opacity shadow-sm"
              >
                Subscribe
              </button>
            </form>
          </div>
          
        </div>
      </div>

      {/* --- Main Footer Content --- */}
      <div className="max-w-6xl mx-auto px-6 pb-8">
        
        {/* Logo Section */}
        <div className="flex justify-center mb-16 mt-10">
          <div className="w-40 flex items-center justify-center">
            {/* Replace src with your cricket logo asset */}
            <img src={Logo} alt="Cricket Logo" className="w-full h-auto object-contain" />
          </div>
        </div>

        {/* Footer Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-sm text-gray-400 mb-16">
          
          {/* About Us */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">About Us</h3>
            <p className="leading-relaxed">
              We are a passionate team<br/>
              dedicated to providing the best<br/>
              services to our customers.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-4">
              {['Home', 'Services', 'About', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="flex items-center gap-2 hover:text-white transition-colors">
                    {/* Square Bullet */}
                    <span className="w-1.5 h-1.5 bg-gray-400 block rounded-sm"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Footer Subscribe */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Subscribe</h3>
            <p className="leading-relaxed">
              Subscribe to our newsletter for the<br/>
              latest updates.
            </p>
            
            {/* Inline Input/Button styling */}
            <form className="flex w-full bg-white rounded-lg p-1 mt-2 focus-within:ring-2 focus-within:ring-amber-200 transition-all">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-2 text-gray-900 focus:outline-none bg-transparent"
              />
              <button 
                type="submit" 
                className="px-6 py-2.5 rounded-md font-bold text-gray-900 bg-gradient-to-r from-pink-300 to-amber-400 hover:opacity-90 transition-opacity"
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>

        {/* Copyright Bar */}
        <div className="border-t border-gray-800/80 pt-8 text-center text-sm text-gray-500">
          <p>@2024 Your Company All Rights Reserved.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;