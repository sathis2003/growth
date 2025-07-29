import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What is the Scaling Wolf Framework?',
      answer: 'The Scaling Wolf Framework is our proprietary methodology designed to help entrepreneurs move from survival mode to 10x-100x scale in revenue, branches, and team size within 3 years. It combines strategic planning, operational excellence, and mindset transformation to create sustainable business growth.'
    },
    {
      question: 'How does the lifetime membership work?',
      answer: 'For a one-time payment of ₹999, you get lifetime access to all our tools, templates, expert sessions, and community. This includes all future updates, new tools, and additional expert sessions we add to the platform. No recurring fees, ever.'
    },
    {
      question: 'What industries do your templates cover?',
      answer: 'Our templates are specifically designed for Manufacturing, Retail, E-commerce, F&B (Food & Beverage), and Tech startups. Each template is industry-specific and includes real-world examples and best practices from successful businesses in those sectors.'
    },
    {
      question: 'Who are the experts in your community?',
      answer: 'Our expert network includes specialists in Digital Marketing with AI, Branding Strategy, GST Tax Optimization, Team Building, Operations, and more. Each expert conducts 2 sessions per month, giving you 24 expert sessions annually with direct access to industry leaders.'
    },
    {
      question: 'Can I really achieve 10x growth in 3 years?',
      answer: 'While results vary by business and implementation, our framework is designed based on proven strategies that have helped thousands of entrepreneurs achieve significant growth. 95% of our active members see measurable growth within 30 days of implementation.'
    },
    {
      question: 'What if I\'m not satisfied with the membership?',
      answer: 'We offer a 30-day money-back guarantee. If you\'re not completely satisfied with the value you receive from our tools, templates, and community within the first 30 days, we\'ll refund your entire payment, no questions asked.'
    },
    {
      question: 'How do I access the tools and templates?',
      answer: 'Once you join, you\'ll receive immediate access to our member portal where all tools, templates, and resources are organized by category. You\'ll also get login credentials for our private community forum and calendar links for expert sessions.'
    },
    {
      question: 'Is there ongoing support available?',
      answer: 'Yes! You get 24/7 access to our private community forum where you can connect with other entrepreneurs, ask questions, and get peer support. Plus, our expert sessions include live Q&A where you can get direct answers to your specific challenges.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about Scaling Wolf membership
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-100 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="w-6 h-6 text-indigo-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-gray-400 flex-shrink-0" />
                )}
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-6">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;