import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img
            src='/logo.png'
            style={{width:"50px",height:"50px"}}
            ></img>
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-blue-400 bg-clip-text text-transparent hover:scale-105 transition-transform duration-200"
            >
              CardFi
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-pink-500 transition-colors font-medium">
              About
            </button>
            <button onClick={() => scrollToSection('demo')} className="text-gray-700 hover:text-pink-500 transition-colors font-medium">
              Demo
            </button>
            <button onClick={() => scrollToSection('features')} className="text-gray-700 hover:text-pink-500 transition-colors font-medium">
              Features
            </button>
            <button onClick={() => scrollToSection('vision')} className="text-gray-700 hover:text-pink-500 transition-colors font-medium">
              Vision
            </button>
            <button onClick={() => scrollToSection('community')} className="text-gray-700 hover:text-pink-500 transition-colors font-medium">
              Community
            </button>
            <button 
              onClick={() => scrollToSection('community')}
              className="bg-gradient-to-r from-pink-500 to-blue-400 text-white px-6 py-2 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-200 font-medium"
            >
              Join Community
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-pink-500 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 mt-2 rounded-lg shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button onClick={() => scrollToSection('about')} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-pink-500 hover:bg-pink-50 rounded-lg transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection('demo')} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-pink-500 hover:bg-pink-50 rounded-lg transition-colors">
                Demo
              </button>
              <button onClick={() => scrollToSection('features')} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-pink-500 hover:bg-pink-50 rounded-lg transition-colors">
                Features
              </button>
              <button onClick={() => scrollToSection('vision')} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-pink-500 hover:bg-pink-50 rounded-lg transition-colors">
                Vision
              </button>
              <button onClick={() => scrollToSection('community')} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-pink-500 hover:bg-pink-50 rounded-lg transition-colors">
                Community
              </button>
              <button 
                onClick={() => scrollToSection('community')}
                className="w-full bg-gradient-to-r from-pink-500 to-blue-400 text-white px-3 py-2 rounded-lg hover:shadow-lg transition-all duration-200 font-medium"
              >
                Join Community
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
