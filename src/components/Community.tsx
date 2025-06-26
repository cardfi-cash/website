import React from 'react'
import { MessageCircle, Users, Heart, Star, Github, Twitter, Send, Mail, MapPin, Phone } from 'lucide-react'

const Community = () => {
  const socialLinks = [
    {
      name: "Telegram",
      icon: <Send className="w-6 h-6" />,
      description: "Join our active community for real-time discussions and updates",
      members: "5.2K+",
      gradient: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50",
      url:"https://t.me/+ukjqIc0qpfcwN2U1"
    },
    {
      name: "Twitter",
      icon: <Twitter className="w-6 h-6" />,
      description: "Follow us for the latest announcements and industry insights",
      members: "12K+",
      gradient: "from-blue-400 to-blue-600",
      bgColor: "from-blue-50 to-blue-100",
      url:"https://x.com/cardficash"
    },
    {
      name: "GitHub",
      icon: <Github className="w-6 h-6" />,
      description: "Contribute to our open-source development and documentation",
      members: "800+",
      gradient: "from-gray-700 to-gray-900",
      bgColor: "from-gray-50 to-gray-100",
      url:"https://github.com/cardfi-cash"
    }
  ]

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "contact@cardfi.cash",
      description: "General inquiries and partnerships"
    },
    {
      icon: <Send className="w-6 h-6" />,
      title: "Telegram",
      value: "@CardFiCash",
      description: "Community support and discussions"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "Globally Distributed",
      description: "Decentralized team worldwide"
    }
  ]

  const stats = [
    { label: "Community Members", value: "18K+", icon: <Users className="w-6 h-6" /> },
    { label: "GitHub Stars", value: "2.1K+", icon: <Star className="w-6 h-6" /> },
    { label: "Active Contributors", value: "150+", icon: <Heart className="w-6 h-6" /> },
    { label: "Supported Chains", value: "5+", icon: <MessageCircle className="w-6 h-6" /> }
  ]

  return (
    <section id="community" className="py-20 bg-gradient-to-br from-slate-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-500 to-blue-400 bg-clip-text text-transparent mb-6">
            Join Our Community
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Connect with thousands of builders, developers, and DeFi enthusiasts shaping the future of decentralized finance
          </p>
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 text-center hover:shadow-xl hover:scale-105 transition-all duration-300">
              <div className="bg-gradient-to-r from-pink-500 to-blue-400 text-white p-3 rounded-xl inline-flex mb-4">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-blue-400 bg-clip-text text-transparent mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Social Links */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {socialLinks.map((social, index) => (
            <div 
              key={index}
              className={`bg-gradient-to-br ${social.bgColor} rounded-3xl p-8 shadow-xl border border-white/20 hover:shadow-2xl hover:scale-105 transition-all duration-500 group cursor-pointer`}
            >
              <div className={`bg-gradient-to-r ${social.gradient} text-white p-4 rounded-2xl inline-flex mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {social.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {social.name}
              </h3>
              
              <div className={`text-lg font-semibold bg-gradient-to-r ${social.gradient} bg-clip-text text-transparent mb-4`}>
                {social.members} members
              </div>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                {social.description}
              </p>

              <button className={`w-full bg-gradient-to-r ${social.gradient} text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2`}
               onClick={
                  ()=>
                  {
                    window.open(social.url)
                  }
                }>
                <span>Join {social.name}</span>
                {social.icon}
              </button>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-pink-500 to-blue-400 rounded-3xl p-12 text-white shadow-2xl mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">
              Stay Updated with CardFi
            </h3>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Get the latest news, updates, and exclusive insights delivered directly to your inbox
            </p>
          </div>
          
          <div className="max-w-md mx-auto">
            <div className="flex gap-3">
              <input 
                type="email" 
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/30"
              />
              <button className="bg-white text-pink-600 px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200 flex items-center gap-2">
                Subscribe
                <Send className="w-4 h-4" />
              </button>
            </div>
            <p className="text-sm opacity-75 mt-3 text-center">
              No spam, unsubscribe at any time
            </p>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-xl border border-white/20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Have questions, partnership inquiries, or want to contribute? We'd love to hear from you.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {contactInfo.map((contact, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-r from-pink-500 to-blue-400 text-white p-4 rounded-2xl inline-flex mb-4 group-hover:scale-110 transition-transform duration-300">
                  {contact.icon}
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  {contact.title}
                </h4>
                <div className="text-lg font-medium bg-gradient-to-r from-pink-500 to-blue-400 bg-clip-text text-transparent mb-2">
                  {contact.value}
                </div>
                <p className="text-gray-600 text-sm">
                  {contact.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-pink-500 to-blue-400 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg hover:scale-105 transition-all duration-200 inline-flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Contact Us
              </button>
              <button className="border-2 border-pink-300 text-pink-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-pink-50 hover:border-pink-400 hover:scale-105 transition-all duration-200 inline-flex items-center gap-2"
               onClick={
                  ()=>
                  {
                    window.open("https://t.me/+ukjqIc0qpfcwN2U1")
                  }
                }>
                <Send className="w-5 h-5" />
                Join Telegram
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Community
