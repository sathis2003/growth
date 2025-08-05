import React from 'react';
import { Wrench, FileText, Users, TrendingUp, Calculator, Target } from 'lucide-react';
import { motion } from 'framer-motion';

const WhatYouGet = () => {
  const features = [
    {
      icon: Wrench,
      title: 'Premium Business Tools',
      subtitle: 'Access 50+ Scaling Tools',
      items: [
        'Risk Analysis Tool (Google Sheet)',
        'Profit Margin Calculator (Excel)',
        '100× Limiting Belief Assessment',
        'Financial Modeling Templates',
        'Operational Diagnostic Tools',
        'Growth Planning Frameworks',
        'Performance Tracking Dashboards'
      ]
    },
    {
      icon: FileText,
      title: 'Industry Templates Library',
      subtitle: '20+ Ready-to-Use Templates',
      items: [
        'Manufacturing Scale-up Templates',
        'Retail Growth Playbooks',
        'E-commerce Expansion Guides',
        'F&B Business Models',
        'Tech Startup Frameworks',
        'Pitch Deck Templates',
        'Business Plan Blueprints'
      ]
    },
    {
      icon: Users,
      title: 'Expert Community Access',
      subtitle: '24 Expert Sessions per Year',
      items: [
        'Digital Marketing with AI Expert',
        'Branding Strategy Specialist',
        'GST Tax Optimization Expert',
        'Team Building Strategist',
        'Private Community Forums',
        'Live Q&A Masterclasses',
        'Peer Mastermind Groups'
      ]
    }
  ];

  return (
    <section id="tools" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Everything You Need to Scale with the{' '}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Dream100club Framework
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get our complete ecosystem of tools, templates, and expert guidance
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-indigo-600 font-semibold">{feature.subtitle}</p>
              </div>

              <ul className="space-y-3">
                {feature.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatYouGet;