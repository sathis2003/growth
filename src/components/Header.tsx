import React, { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import logo from "../../images/logo.png"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-lg shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            {/* <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
              {/* <Zap className="w-6 h-6 text-white" /> */}
              {/* <img src={logo} alt="Logo" className="w-8 h-8 object-cover" />

            </div> */} 
            <img src={logo} alt="Logo" className="w-10 h-10 " />
            <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Scaling Wolf 
            </span>
          </div>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#tools" className="text-gray-700 hover:text-indigo-600 transition-colors">
              Tools
            </a>
            <a href="#templates" className="text-gray-700 hover:text-indigo-600 transition-colors">
              Templates
            </a>
            <a href="#community" className="text-gray-700 hover:text-indigo-600 transition-colors">
              Community
            </a>
            <a href="#pricing" className="text-gray-700 hover:text-indigo-600 transition-colors">
              Pricing
            </a>
          </nav>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
          >
            Get Started
          </motion.button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white border-t border-gray-200 py-4"
          >
            <nav className="flex flex-col space-y-4">
              <a href="#tools" className="text-gray-700 hover:text-indigo-600 transition-colors px-4">
                Tools
              </a>
              <a href="#templates" className="text-gray-700 hover:text-indigo-600 transition-colors px-4">
                Templates
              </a>
              <a href="#community" className="text-gray-700 hover:text-indigo-600 transition-colors px-4">
                Community
              </a>
              <a href="#pricing" className="text-gray-700 hover:text-indigo-600 transition-colors px-4">
                Pricing
              </a>
              <button className="mx-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold">
                Get Started
              </button>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;