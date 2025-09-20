import { useState } from "react";

const Dream100FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is the Dream100club Framework?",
      answer: "The Dream100club Framework is our proprietary methodology designed to help entrepreneurs move from survival mode to 100x scale in revenue, branches, and team size within 3 years. It combines strategic planning, operational excellence, and mindset transformation to create sustainable business growth."
    },
    {
      question: "How does the one year membership work?",
      answer: "Your membership gives you instant access to all tools, templates, and expert sessions for a full year. You'll receive continuous updates, new tools, and can participate in all live sessions and community forums."
    },
    {
      question: "What industries do your templates cover?",
      answer: "We cover Manufacturing, Retail, E-commerce, F&B, Tech Startups, and many other industries with specific scale-up templates and frameworks tailored to each sector's unique challenges."
    },
    {
      question: "Who are the experts in your community?",
      answer: "Our expert panel includes Digital Marketing specialists, Branding strategists, GST Tax optimization experts, Team building consultants, and successful entrepreneurs who have scaled multiple businesses."
    },
    {
      question: "Can I really achieve 100x growth in 3 years?",
      answer: "While results vary, 96% of our members see significant growth within 30 days. The 100x framework focuses on systematic scaling of revenue, operations, and team size using proven methodologies."
    },
    {
      question: "Is there ongoing support available?",
      answer: "Yes! You get 24/7 community support, monthly live Q&A sessions, peer mentorship through mastermind groups, and direct access to experts during scheduled sessions."
    }
  ];

  return (
    <section className="py-24 px-6 bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-black text-center text-white mb-16 leading-tight">
          FREQUENTLY ASKED
          <br />
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            QUESTIONS
          </span>
        </h2>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden hover:border-blue-500/30 transition-all duration-300"
            >
              <button
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-750 transition-colors"
              >
                <h3 className="text-lg font-bold text-white">{faq.question}</h3>
                <svg
                  className={`w-6 h-6 text-blue-400 transform transition-transform duration-200 ${
                    openFAQ === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openFAQ === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-8 pb-6">
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Dream100FAQ;