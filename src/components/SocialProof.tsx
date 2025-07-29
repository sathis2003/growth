import React from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

const SocialProof = () => {
  const logos = [
    'TechCorp', 'GrowthCo', 'ScaleUp', 'InnovateLab', 'BusinessPro', 
    'StartupHub', 'VentureMax', 'SuccessFlow', 'GrowthEngine', 'ScaleMaster'
  ];

  return (
    <section className="py-16 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-8"
        >
          <h2 className="text-2xl font-bold text-gray-900">
            Join 10,000+ Successful Entrepreneurs
          </h2>

          {/* Star Rating */}
          <div className="flex items-center justify-center space-x-2">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
            </div>
            <span className="text-gray-600 font-medium">4.9/5 from 2,847 reviews</span>
          </div>

          {/* Logo Carousel */}
          <div className="relative overflow-hidden">
            <motion.div
              animate={{ x: [-1000, 0] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="flex space-x-12 items-center"
            >
              {[...logos, ...logos].map((logo, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-32 h-16 bg-gray-100 rounded-lg flex items-center justify-center"
                >
                  <span className="text-gray-500 font-semibold text-sm">{logo}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProof;