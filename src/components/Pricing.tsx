import React from 'react';
import { Check, Crown, Shield, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const Pricing = () => {
  const features = [
    'Complete Dream100club Framework Access',
    'Risk Analysis Tool (Google Sheet)',
    'Profit Margin Calculator (Excel)',
    '100× Limiting Belief Assessment',
    'Industry-Specific Scale-up Templates',
    '200+ Ready-to-Use Business Templates',
    '24 Expert Sessions per Year',
    'Private Community Forum Access',
    'Live Q&A Masterclasses',
    'Peer Mastermind Groups',
    'Lifetime Updates & New Tools',
    '24/7 Community Support',
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-gray-50 to-indigo-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Everything Included in Your{' '}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Lifetime Membership
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            One-time payment to access our complete scaling ecosystem
          </p>
        </motion.div>

        {/* Pricing Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Most Popular Badge */}
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-2 rounded-full font-semibold text-sm flex items-center space-x-2"
            >
              <Crown className="w-4 h-4" />
              <span>Most Popular Choice</span>
            </motion.div>
          </div>

          {/* Card Container */}
          <div className="bg-white rounded-3xl shadow-2xl border-2 border-indigo-200 overflow-hidden">
            {/* Card Header */}
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-8 text-center text-white">
              <h3 className="text-2xl font-bold mb-2">Dream100club Lifetime Access</h3>
              <p className="text-indigo-100 mb-6">Complete Dream100club Framework Ecosystem</p>

              {/* Price Section */}
              <div className="flex items-center justify-center space-x-3 mb-4">
                <span className="line-through text-yellow-200 text-xl">₹4999</span>
                <span className="text-5xl font-extrabold text-white">₹999</span>
              </div>

              {/* Tagline */}
              <div className="bg-gradient-to-r from-yellow-100 via-yellow-50 to-white border border-yellow-300 rounded-lg shadow-sm p-2 text-center max-w-[180px] mx-auto">
                <p className="text-yellow-600 font-semibold text-sm tracking-normal">
                  One Decision. Big Impact
                </p>
              </div>

            </div>

            {/* Features List */}
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center space-x-3"
                  >
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </motion.div>
                ))}
              </div>

              {/* Call to Action */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 px-8 rounded-xl font-bold text-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Zap className="w-6 h-6" />
                <span>Get Instant Access</span>
              </motion.button>

              {/* Guarantee Info */}
              <div className="flex items-center justify-center space-x-4 mt-6 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <Shield className="w-4 h-4 text-green-500" />
                  <span>7-day money-back guarantee</span>
                </div>
              </div>

              {/* Lifetime Value Card */}
              <div className="mt-6 p-4 bg-green-50 rounded-xl border border-green-200">
                <div className="flex items-center space-x-2 text-green-800">
                  <Shield className="w-5 h-5" />
                  <span className="font-semibold">Lifetime Value Guarantee</span>
                </div>
                <p className="text-green-700 text-sm mt-1">
                  Get continuous updates, new tools, and expert sessions for life.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
