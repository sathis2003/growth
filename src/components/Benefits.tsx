import React from 'react';
import { Clock, Users, TrendingUp, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const Benefits = () => {
  const benefits = [
    {
      icon: Clock,
      title: 'Time Saving',
      description: 'Save 20+ hours per week with our proven frameworks and ready-to-use templates',
      stat: '20+ Hours Saved Weekly',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Users,
      title: 'Expert Guidance',
      description: 'Learn from industry veterans across digital marketing, branding, tax optimization, and team building',
      stat: '24 Expert Sessions Annually',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: TrendingUp,
      title: 'Proven Results',
      description: 'Our Dream100club Framework helps 95% of members achieve significant growth within 30 days',
      stat: '95% See Growth in 30 Days',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: Heart,
      title: 'Community Support',
      description: '24/7 peer support network with like-minded entrepreneurs on the same scaling journey',
      stat: '10,000+ Active Members',
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why 10,000+ Entrepreneurs Choose Dream100club
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join a proven ecosystem that transforms businesses from survival mode to exponential growth
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className={`w-16 h-16 bg-gradient-to-r ${benefit.gradient} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {benefit.description}
                  </p>
                  <div className={`inline-block px-4 py-2 bg-gradient-to-r ${benefit.gradient} text-white rounded-lg font-semibold text-sm`}>
                    {benefit.stat}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;