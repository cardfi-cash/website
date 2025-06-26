import React from 'react'
import { Github, Twitter, Send, Mail, ExternalLink, ArrowUp, Heart } from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const footerLinks = {
    Product: [
      { name: 'Features', action: () => scrollToSection('features') },
      { name: 'Demo Protocols', action: () => scrollToSection('demo') },
      { name: 'Multi-chain Support', action: () => scrollToSection('features') },
      { name: 'Documentation', action: () => {} }
    ],
    Company: [
      { name: 'About Us', action: () => scrollToSection('about') },
      { name: 'Vision', action: () => scrollToSection('vision') },
      { name: 'Careers', action: () => {} },
      { name: 'Blog', action: () => {} }
    ],
    Community: [
      { name: 'Telegram', action: () => {
        window.open("https://t.me/+ukjqIc0qpfcwN2U1")
      } },
      { name: 'Twitter', action: () => {window.open("https://x.com/cardficash")} },
      { name: 'GitHub', action: () => {window.open("https://github.com/cardfi")} },
    ],
    Legal: [
      { name: 'Privacy Policy', action: () => {} },
      { name: 'Terms of Service', action: () => {} },
      { name: 'Cookie Policy', action: () => {} },
      { name: 'Compliance', action: () => {} }
    ]
  }

  const socialLinks = [
    { name: 'GitHub', icon: <Github className="w-5 h-5" />, href: 'https://github.com/cardfi' },
    { name: 'Twitter', icon: <Twitter className="w-5 h-5" />, href: 'https://x.com/cardficash' },
    { name: 'Telegram', icon: <Send className="w-5 h-5" />, href: 'https://t.me/+ukjqIc0qpfcwN2U1' },
    { name: 'Email', icon: <Mail className="w-5 h-5" />, href: 'mailto:contact@cardfi.cash' }
  ]

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent mb-4">
                CardFi Protocol
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Empowering DeFi assets for real-world spending through innovative multi-chain infrastructure and encrypted prepaid card solutions.
              </p>
              <div className="bg-gradient-to-r from-pink-500 to-blue-400 p-0.5 rounded-xl">
                <div className="bg-gray-900 rounded-lg p-4">
                  <p className="text-lg font-semibold bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent">
                    "CardFi — Empowering DeFi assets for real-world spending"
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="bg-gray-800 hover:bg-gray-700 p-3 rounded-lg transition-all duration-200 hover:scale-110 group"
                  aria-label={social.name}
                >
                  <div className="text-gray-400 group-hover:text-white transition-colors">
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-lg font-semibold text-white mb-4">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={link.action}
                      className="text-gray-400 hover:text-white transition-colors duration-200 hover:translate-x-1 transform flex items-center gap-1 group"
                    >
                      {link.name}
                      <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-gray-700 mt-12 pt-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-2xl font-bold text-white mb-3">
                Stay Connected
              </h4>
              <p className="text-gray-400 leading-relaxed">
                Subscribe to our newsletter for the latest updates, announcements, and insights from the CardFi ecosystem.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                />
                <button className="bg-gradient-to-r from-pink-500 to-blue-400 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200 flex items-center gap-2">
                  Subscribe
                  <Send className="w-4 h-4" />
                </button>
              </div>
              <p className="text-sm text-gray-500">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>

        {/* Security & Compliance */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-gray-800/50 rounded-xl p-6">
              <h5 className="font-semibold text-white mb-2">Security First</h5>
              <p className="text-gray-400 text-sm">
                Enterprise-grade security protocols and encryption standards
              </p>
            </div>
            <div className="bg-gray-800/50 rounded-xl p-6">
              <h5 className="font-semibold text-white mb-2">Fully Decentralized</h5>
              <p className="text-gray-400 text-sm">
                No central authority, complete user control over assets
              </p>
            </div>
            <div className="bg-gray-800/50 rounded-xl p-6">
              <h5 className="font-semibold text-white mb-2">Open Source</h5>
              <p className="text-gray-400 text-sm">
                Transparent, auditable code available for community review
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 bg-gray-900/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-gray-400">
              <span>© 2025 CardFi Protocol. All rights reserved.</span>
              <Heart className="w-4 h-4 text-pink-500" />
            </div>
            
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <span>Built with</span>
                <div className="flex items-center gap-1">
                  <Heart className="w-4 h-4 text-pink-500" />
                  <span>for the DeFi community</span>
                </div>
              </div>
              
              <button
                onClick={scrollToTop}
                className="bg-gradient-to-r from-pink-500 to-blue-400 text-white p-2 rounded-lg hover:shadow-lg hover:scale-110 transition-all duration-200"
                aria-label="Scroll to top"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
