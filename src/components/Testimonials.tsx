import React from 'react';
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Priya Sharma',
      company: 'FashionForward Retail',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      quote: 'The Dream100club Framework transformed my retail business from ₹2 lakhs to ₹25 lakhs monthly revenue in just 18 months. The risk analysis tool alone saved me from a costly expansion mistake.',
      result: '12.5x Revenue Growth'
    },
    {
      name: 'Rajesh Kumar',
      company: 'MindsetMastery Coaching',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      quote: 'As a business coach, I thought I knew scaling. Dream100club showed me frameworks I never considered. My coaching practice grew from 50 to 500+ clients using their community-building strategies.',
      result: '10x Client Base Growth'
    },
    {
      name: 'Anita Patel',
      company: 'TechStart Solutions',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      quote: 'The profit margin calculator and financial modeling templates were game-changers. We went from struggling startup to profitable SaaS company with 200+ enterprise clients in 2 years.',
      result: '₹50L ARR Achieved'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Success Stories from Our Community
          </h2>
          <p className="text-xl text-indigo-200 max-w-3xl mx-auto">
            Real entrepreneurs, real results with the Dream100club Framework
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300"
            >
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-indigo-300 mb-4" />

              {/* Rating */}
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial */}
              <p className="text-white mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>

              {/* Result Badge */}
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-lg font-semibold text-sm">
                  {testimonial.result}
                </span>
              </div>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-indigo-200 text-sm">{testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;