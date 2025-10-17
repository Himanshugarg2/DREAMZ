import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import EventsSection from "./components/EventsSection";
import SponsorsSection from "./components/SponsorsSection";
import QuoteSection from "./components/QuoteSection";
import ContactSection from "./components/ContactSection";
import DownloadBrochureSection from "./components/DownloadBrochureSection";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0)

  return (
     <div className="font-sans">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <EventsSection />
      <SponsorsSection />
      <QuoteSection />
      <ContactSection />
      <DownloadBrochureSection />
      <Footer />
    </div>
      
  )
}

export default App
