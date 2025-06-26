import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import DemoProtocols from './components/DemoProtocols'
import KeyFeatures from './components/KeyFeatures'
import Vision from './components/Vision'
import Community from './components/Community'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <Header />
      <Hero />
      <About />
      <DemoProtocols />
      <KeyFeatures />
      <Vision />
      <Community />
      <Footer />
    </div>
  )
}

export default App
