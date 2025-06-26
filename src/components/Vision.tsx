import React from 'react'
import { Target, Rocket, Globe, TrendingUp, Users, Zap, Shield, ArrowRight } from 'lucide-react'

const Vision = () => {
  const milestones = [
    {
      year: "2024",
      title: "Foundation",
      description: "Launch CardFi Protocol with multi-chain support and core infrastructure",
      icon: <Rocket className="w-6 h-6" />,
      status: "completed"
    },
    {
      year: "2025",
      title: "Ecosystem Growth",
      description: "Expand to 10+ blockchains and onboard 100+ integrated protocols",
      icon: <TrendingUp className="w-6 h-6" />,
      status: "in-progress"
    },
    {
      year: "2026",
      title: "Global Adoption",
      description: "Become the standard infrastructure for DeFi-to-fiat integration worldwide",
      icon: <Globe className="w-6 h-6" />,
      status: "planned"
    }
  ]

  const visionPoints = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security First",
      description: "Building the most secure and reliable infrastructure for financial transactions"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Inclusive Finance",
      description: "Making DeFi accessible to everyone, regardless of technical expertise"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Innovation Driver",
      description: "Continuously pushing the boundaries of what's possible in decentralized finance"
    }
  ]

  return (
    <section id="vision" className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-500 to-blue-400 bg-clip-text text-transparent mb-6">
            Our Vision
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Shaping the future of decentralized finance and real-world integration
          </p>
        </div>

        {/* Main Vision Statement */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-white/20 mb-16">
          <div className="text-center mb-12">
            <Target className="w-16 h-16 text-pink-500 mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Becoming Critical Infrastructure
            </h3>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-700 leading-relaxed text-center mb-8">
              CardFi aims to become the <span className="bg-gradient-to-r from-pink-500 to-blue-400 bg-clip-text text-transparent font-semibold">critical infrastructure</span> linking DeFi financial products to everyday fiat usage, enabling direct and smooth integration of decentralized assets into daily commerce and consumption.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {visionPoints.map((point, index) => (
                <div key={index} className="text-center group">
                  <div className="bg-gradient-to-r from-pink-500 to-blue-400 text-white p-4 rounded-2xl inline-flex mb-4 group-hover:scale-110 transition-transform duration-300">
                    {point.icon}
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">
                    {point.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {point.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Roadmap */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Journey Forward
          </h3>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-pink-500 to-blue-400 rounded-full hidden md:block"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col md:gap-16 gap-8`}>
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} text-center`}>
                    <div className={`bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 hover:shadow-2xl hover:scale-105 transition-all duration-300 ${
                      milestone.status === 'completed' ? 'border-green-300' : 
                      milestone.status === 'in-progress' ? 'border-yellow-300' : 
                      'border-gray-300'
                    }`}>
                      <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-4 ${
                        milestone.status === 'completed' ? 'bg-green-100 text-green-800' :
                        milestone.status === 'in-progress' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {milestone.icon}
                        {milestone.year}
                      </div>
                      <h4 className="text-2xl font-bold text-gray-900 mb-3">
                        {milestone.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="hidden md:block">
                    <div className={`w-6 h-6 rounded-full border-4 ${
                      milestone.status === 'completed' ? 'bg-green-500 border-green-300' :
                      milestone.status === 'in-progress' ? 'bg-yellow-500 border-yellow-300' :
                      'bg-gray-300 border-gray-200'
                    }`}></div>
                  </div>
                  
                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Future Impact */}
        <div className="bg-gradient-to-r from-pink-500 to-blue-400 rounded-3xl p-12 text-white shadow-2xl">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-6">
              The Future We're Building
            </h3>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Imagine a world where your DeFi investments seamlessly power your daily expenses, where blockchain assets are as accessible as traditional banking, and where financial sovereignty doesn't compromise convenience.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h4 className="text-xl font-semibold mb-3">For Individuals</h4>
                <p className="opacity-90 leading-relaxed">
                  Direct access to DeFi yields for everyday spending, complete financial autonomy, and global payment capabilities without traditional banking limitations.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h4 className="text-xl font-semibold mb-3">For Businesses</h4>
                <p className="opacity-90 leading-relaxed">
                  Streamlined treasury management, reduced payment processing costs, and access to global DeFi liquidity for operational efficiency.
                </p>
              </div>
            </div>
            
            <button className="bg-white text-pink-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg hover:scale-105 transition-all duration-200 inline-flex items-center gap-2">
              Join Our Mission
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Vision
