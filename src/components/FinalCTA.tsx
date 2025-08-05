import React from 'react';
import { Zap, Shield, Star, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const FinalCTA = () => {
  const trustBadges = [
    { icon: Shield, text: '7-day Guarantee' },
    { icon: Users, text: '10,000+ Members' },
    { icon: Star, text: '4.9/5 Rating' },
    { icon: Zap, text: 'Instant Access' }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-400 rounded-full blur-3xl opacity-20" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Ready to Transform Your Business with the{' '}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Dream100club ?
            </span>
          </h2>
          
          <p className="text-xl text-indigo-200 max-w-2xl mx-auto">
           Join thousands of successful entrepreneurs who've achieved 10x growth using our proven business growth framework, powerful systems, and expert community
          </p>

          <h1>
            <span className="text-yellow-400 font-semibold text-4xl"> Actual Value: <span className='line-through'>₹4999</span></span> 
          </h1>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-12 py-6 rounded-2xl font-bold text-xl hover:shadow-2xl transition-all duration-300 flex items-center space-x-3 mx-auto"
          >
            <Zap className="w-8 h-8" />
            <span>Become a Member Today -  ₹999</span>
          </motion.button>

          <p className="text-indigo-300 text-lg">
            <Shield className="w-5 h-5 inline mr-2" />
            7-day money-back guarantee
          </p>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-white/20"
          >
            {trustBadges.map((badge, index) => (
              <div key={index} className="flex flex-col items-center space-y-2">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                  <badge.icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-white text-sm font-medium">{badge.text}</span>
              </div>
            ))}
          </motion.div>

          {/* Additional Trust Elements */}
          <div className="mt-8 space-y-2">
            <p className="text-indigo-200 text-sm">
              ✓ Instant access to all tools and templates
            </p>
            <p className="text-indigo-200 text-sm">
              ✓ Join 24 expert sessions this year
            </p>
            <p className="text-indigo-200 text-sm">
              ✓ Connect with 10,000+ like-minded entrepreneurs
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;