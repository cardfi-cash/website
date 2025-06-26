import React from 'react'
import { Zap, Target, Users, TrendingUp } from 'lucide-react'

const About = () => {
  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Innovation",
      description: "Pioneering the future of decentralized finance with cutting-edge technology"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Mission-Driven",
      description: "Bridging the gap between DeFi assets and real-world financial applications"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Community-First",
      description: "Building an ecosystem that empowers users and developers worldwide"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Growth-Focused",
      description: "Continuously expanding capabilities and multi-chain support"
    }
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-blue-50 via-white to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-500 to-blue-400 bg-clip-text text-transparent mb-6">
            About CardFi Protocol
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Revolutionizing how we bridge decentralized finance with everyday spending
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900 leading-tight">
              Expanding DeFi Beyond Traditional Boundaries
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              CardFi Protocol represents a revolutionary approach to decentralized finance, creating the first comprehensive infrastructure for encrypted prepaid card issuance across multiple blockchain networks. We're not just another DeFi protocol – we're building the critical bridge between your digital assets and real-world financial needs.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our platform enables anyone to seamlessly convert their DeFi holdings into practical spending power through secure, encrypted prepaid cards. By leveraging smart contracts and cross-chain compatibility, we ensure that your assets remain under your control while providing unprecedented access to traditional financial services.
            </p>
            <div className="bg-gradient-to-r from-pink-100 to-blue-100 p-6 rounded-2xl border border-pink-200">
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Our Mission</h4>
              <p className="text-gray-700 leading-relaxed">
                To democratize access to financial services by creating a seamless connection between decentralized assets and everyday commerce, empowering users worldwide to truly own and utilize their digital wealth.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/20 hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <div className="bg-gradient-to-r from-pink-500 to-blue-400 text-white p-3 rounded-lg inline-flex mb-4">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Key Benefits */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose CardFi Protocol?
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-r from-pink-500 to-blue-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Seamless Integration</h4>
              <p className="text-gray-600 leading-relaxed">
                Connect your DeFi assets to real-world spending without compromising on security or decentralization.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-pink-500 to-blue-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Multi-Chain Support</h4>
              <p className="text-gray-600 leading-relaxed">
                Access your assets across Ethereum, BSC, Arbitrum, Base, Solana, and more supported networks.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-pink-500 to-blue-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Enhanced Privacy</h4>
              <p className="text-gray-600 leading-relaxed">
                Encrypted card issuance ensures your financial privacy while maintaining compliance standards.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
