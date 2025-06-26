import React from 'react'
import { Layers, CreditCard, DollarSign, Coins, Shield, Globe, Zap, Users } from 'lucide-react'

const KeyFeatures = () => {
  const blockchains = [
    { name: 'Ethereum', symbol: 'ETH', image: '/images/ethereum-logo.png', color: 'from-blue-400 to-blue-600' },
    { name: 'Binance Smart Chain', symbol: 'BSC', image: '/images/bsc-logo.png', color: 'from-yellow-400 to-yellow-600' },
    { name: 'Arbitrum', symbol: 'ARB', image: '/images/arbitrum-logo.jpg', color: 'from-blue-500 to-cyan-500' },
    { name: 'Base', symbol: 'BASE', image: '/images/base-logo.jpg', color: 'from-blue-600 to-indigo-600' },
    { name: 'Solana', symbol: 'SOL', image: '/images/solana-logo.jpg', color: 'from-purple-500 to-pink-500' }
  ]

  const features = [
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "Decentralized Card Issuance",
      description: "Anyone can issue encrypted prepaid cards by interacting with our designated smart contract addresses and interfaces on supported chains",
      gradient: "from-pink-500 to-rose-500",
      bgColor: "from-pink-50 to-rose-50"
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Fiat Integration for DeFi Assets",
      description: "We enable users to seamlessly bridge their DeFi assets with fiat settlement services for real-world consumption",
      gradient: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50",
      subFeatures: [
        "Lending services integration",
        "Wealth management solutions",
        "Real-time asset conversion",
        "Multi-currency support"
      ]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Enterprise-Grade Security",
      description: "Advanced encryption and security protocols ensure your assets and transactions remain protected at all times",
      gradient: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Lightning-Fast Transactions",
      description: "Optimized smart contracts and cross-chain technology deliver near-instant transaction processing",
      gradient: "from-yellow-500 to-orange-500",
      bgColor: "from-yellow-50 to-orange-50"
    }
  ]

  return (
    <section id="features" className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-500 to-blue-400 bg-clip-text text-transparent mb-6">
            Key Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the powerful capabilities that make CardFi the leading multi-chain DeFi infrastructure
          </p>
        </div>

        {/* Multi-chain Support Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
              <Layers className="w-8 h-8 text-pink-500" />
              Multi-chain Support
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              CardFi Protocol operates seamlessly across multiple blockchain networks, providing unparalleled flexibility and accessibility.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-12">
            {blockchains.map((blockchain, index) => (
              <div 
                key={index}
                className={`bg-gradient-to-br ${blockchain.color} p-1 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group`}
              >
                <div className="bg-white rounded-xl p-6 h-full flex flex-col items-center text-center">
                  <div className="w-16 h-16 mb-4 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <img 
                      src={blockchain.image} 
                      alt={`${blockchain.name} logo`}
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                  <h4 className="font-bold text-gray-900 text-sm mb-1">{blockchain.symbol}</h4>
                  <p className="text-xs text-gray-600 leading-tight">{blockchain.name}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <Globe className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Cross-Chain Compatibility</h4>
                <p className="text-gray-600">Seamlessly move assets between different blockchain networks</p>
              </div>
              <div>
                <Coins className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Universal Asset Support</h4>
                <p className="text-gray-600">Support for all major cryptocurrencies and DeFi tokens</p>
              </div>
              <div>
                <Users className="w-12 h-12 text-purple-500 mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Developer Friendly</h4>
                <p className="text-gray-600">Easy integration with comprehensive documentation and SDKs</p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Features Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`bg-gradient-to-br ${feature.bgColor} rounded-3xl p-8 shadow-xl border border-white/20 hover:shadow-2xl hover:scale-105 transition-all duration-500 group`}
            >
              <div className={`bg-gradient-to-r ${feature.gradient} text-white p-4 rounded-2xl inline-flex mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                {feature.description}
              </p>

              {feature.subFeatures && (
                <div className="space-y-2">
                  <h4 className="text-lg font-semibold text-gray-900">Includes:</h4>
                  <ul className="space-y-2">
                    {feature.subFeatures.map((subFeature, subIndex) => (
                      <li key={subIndex} className="flex items-center gap-3">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${feature.gradient}`}></div>
                        <span className="text-gray-700">{subFeature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-pink-500 to-blue-400 rounded-3xl p-12 text-white shadow-2xl">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Experience CardFi?
            </h3>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Join thousands of users already leveraging CardFi's infrastructure to bridge their DeFi assets with real-world spending.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-pink-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg hover:scale-105 transition-all duration-200">
                Get Started Today
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-200">
                View Documentation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default KeyFeatures
