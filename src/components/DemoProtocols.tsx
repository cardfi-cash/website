import React from 'react'
import { ExternalLink, Smartphone, Bot, Shield, Zap } from 'lucide-react'

const DemoProtocols = () => {
  const protocols = [
    {
      name: "Movecash",
      description: "First DeFi crypto prepaid card on Aptos",
      longDescription: "Experience the future of DeFi payments with Movecash, our flagship implementation on the Aptos blockchain. This groundbreaking protocol demonstrates how CardFi's infrastructure enables seamless conversion of Move-based assets into real-world spending power.",
      icon: <Smartphone className="w-8 h-8" />,
      features: [
        "Native Aptos integration",
        "Move language smart contracts",
        "Instant card issuance",
        "Low transaction fees",
        "High throughput processing"
      ],
      gradient: "from-green-400 to-blue-500",
      bgGradient: "from-green-50 to-blue-50",
      url:"https://movecash.top/"
    },
    {
      name: "Moneropan Bot",
      description: "Anonymous crypto prepaid card support Monero ecosystem",
      longDescription: "Moneropan Bot showcases CardFi's commitment to privacy-first financial solutions. Built specifically for the Monero ecosystem, this protocol enables completely anonymous prepaid card services while maintaining the highest standards of security.",
      icon: <Bot className="w-8 h-8" />,
      features: [
        "Complete anonymity",
        "Monero ecosystem support",
        "Privacy-focused design",
        "Automated issuance",
        "Telegram bot interface"
      ],
      gradient: "from-purple-400 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50",
      url:"http://t.me/moneropan_bot"
    }
  ]

  return (
    <section id="demo" className="py-20 bg-gradient-to-br from-gray-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-500 to-blue-400 bg-clip-text text-transparent mb-6">
            Demo Protocols
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our flagship implementations showcasing CardFi's capabilities across different blockchain ecosystems
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {protocols.map((protocol, index) => (
            <div 
              key={index}
              className={`bg-gradient-to-br ${protocol.bgGradient} rounded-3xl p-8 shadow-2xl border border-white/20 hover:shadow-3xl hover:scale-105 transition-all duration-500 group`}
            >
              <div className="flex items-start justify-between mb-6">
                <div className={`bg-gradient-to-r ${protocol.gradient} text-white p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {protocol.icon}
                </div>
                <button className="text-gray-400 hover:text-gray-600 transition-colors">
                  <ExternalLink className="w-5 h-5" href={protocol.url} />
                </button>
              </div>

              <h3 className="text-3xl font-bold text-gray-900 mb-3">
                {protocol.name}
              </h3>
              
              <p className={`text-lg font-medium bg-gradient-to-r ${protocol.gradient} bg-clip-text text-transparent mb-4`}>
                {protocol.description}
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                {protocol.longDescription}
              </p>

              <div className="space-y-3 mb-8">
                <h4 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-green-500" />
                  Key Features
                </h4>
                <ul className="space-y-2">
                  {protocol.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <Zap className="w-4 h-4 text-yellow-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-4">
                <button className={`flex-1 bg-gradient-to-r ${protocol.gradient} text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2`} onClick={
                  ()=>
                  {
                    window.open(protocol.url)
                  }
                }>
                  <span>Launch</span>
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Build Your Own Protocol?
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              CardFi's infrastructure is designed to support unlimited implementations across any blockchain network. 
              Join our community of builders and create the next generation of DeFi payment solutions.
            </p>
            <button className="bg-gradient-to-r from-pink-500 to-blue-400 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg hover:scale-105 transition-all duration-300 inline-flex items-center gap-2">
              Start Building
              <ExternalLink className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DemoProtocols
