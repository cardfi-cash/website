import React from 'react'
import { ArrowRight, CreditCard, Shield, Globe } from 'lucide-react'

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-48 h-48 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Floating icons */}
        <div className="absolute -top-20 left-1/4 animate-bounce delay-500">
          <div className="bg-white/10 backdrop-blur-sm rounded-full p-4 shadow-lg">
            <CreditCard className="w-8 h-8 text-pink-500" />
          </div>
        </div>
        <div className="absolute -top-16 right-1/4 animate-bounce delay-1000">
          <div className="bg-white/10 backdrop-blur-sm rounded-full p-4 shadow-lg">
            <Shield className="w-8 h-8 text-blue-500" />
          </div>
        </div>
        <div className="absolute top-20 -right-10 animate-bounce delay-1500">
          <div className="bg-white/10 backdrop-blur-sm rounded-full p-4 shadow-lg">
            <Globe className="w-8 h-8 text-purple-500" />
          </div>
        </div>

        {/* Main content */}
        <div className="space-y-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-400 bg-clip-text text-transparent leading-tight">
            <img
            src='/logo.png'
            style={{width:"10%",height:"10%" ,minWidth:"50px",minHeight:"50px"}}
            /> CardFi Protocol
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 font-medium max-w-4xl mx-auto leading-relaxed">
            First Multi-chain Decentralized Encrypted Prepaid Card Issuance Service
          </p>

          <div className="max-w-5xl mx-auto">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              CardFi is a cutting-edge decentralized platform enabling the issuance of encrypted prepaid cards across multiple blockchain networks. 
              Our mission is to expand the existing DeFi ecosystem by building a seamless fiat currency downstream layer for real-world spending.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <button 
              onClick={() => scrollToSection('features')}
              className="group bg-gradient-to-r from-pink-500 to-blue-400 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              Explore Features
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => scrollToSection('demo')}
              className="border-2 border-pink-300 text-pink-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-pink-50 hover:border-pink-400 hover:scale-105 transition-all duration-300"
            >
              View Demo Protocols
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-500 to-blue-400 bg-clip-text text-transparent">
                5+
              </div>
              <div className="text-gray-600 font-medium">Supported Chains</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-500 to-blue-400 bg-clip-text text-transparent">
                100%
              </div>
              <div className="text-gray-600 font-medium">Decentralized</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-500 to-blue-400 bg-clip-text text-transparent">
                24/7
              </div>
              <div className="text-gray-600 font-medium">Available</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero
