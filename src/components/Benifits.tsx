import { useEffect, useRef, useState } from "react";

const Dream100Benefits = () => {
  const [activeSection, setActiveSection] = useState(0);
  const sectionRefs = useRef<Array<HTMLDivElement | null>>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const benefits = [
    {
      title: "TIME SAVING",
      subtitle: "Efficiency Boost",
      description: "Save 20+ hours per week with proven frameworks",
      features: [
        "Ready-to-use templates",
        "Automated processes",
        "Streamlined workflows",
        "Quick implementation guides"
      ]
    },
    {
      title: "EXPERT GUIDANCE",
      subtitle: "Industry Veterans",
      description: "Learn from specialists across all business domains",
      features: [
        "24 Expert sessions annually",
        "Digital marketing mastery",
        "Tax optimization strategies",
        "Team building expertise"
      ]
    },
    {
      title: "PROVEN RESULTS",
      subtitle: "Real Growth",
      description: "96% of members see significant growth within 30 days",
      features: [
        "100x growth framework",
        "Measurable outcomes",
        "Success tracking",
        "Performance metrics"
      ]
    },
    {
      title: "COMMUNITY SUPPORT",
      subtitle: "Network Power",
      description: "24/7 support from like-minded entrepreneurs",
      features: [
        "Private forums access",
        "Peer mentorship",
        "Live Q&A sessions",
        "Mastermind groups"
      ]
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const containerRect = containerRef.current.getBoundingClientRect();
      const windowCenter = window.innerHeight / 2;
      
      if (containerRect.top <= windowCenter && containerRect.bottom >= windowCenter) {
        sectionRefs.current.forEach((ref, index) => {
          if (!ref) return;
          
          const rect = ref.getBoundingClientRect();
          const sectionCenter = rect.top + rect.height / 2;
          
          if (Math.abs(sectionCenter - windowCenter) < 200) {
            setActiveSection(index);
          }
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={containerRef} className="py-24 px-6 bg-gradient-to-br from-gray-900 to-black">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-black text-center text-white mb-24 leading-tight">
          WHY 10,000+ CHOOSE
          <br />
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            DREAM100CLUB
          </span>
        </h2>

        <div className="space-y-32">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              ref={(el) => (sectionRefs.current[index] = el)}
              className="relative min-h-screen flex flex-col justify-center"
            >
              <div 
                className={`transition-all duration-700 ease-out ${
                  activeSection === index 
                    ? 'transform scale-100 opacity-100' 
                    : 'transform scale-90 opacity-60'
                }`}
              >
                <h3 className="text-5xl md:text-7xl font-black text-blue-400 mb-4 leading-tight">
                  {benefit.title}
                </h3>
                <p className="text-xl md:text-2xl text-gray-400 mb-2">
                  {benefit.subtitle}
                </p>
                <p className="text-lg text-gray-300 mb-12">
                  {benefit.description}
                </p>
              </div>

              <div 
                className={`transition-all duration-1000 ease-out ${
                  activeSection === index
                    ? 'transform translate-y-0 opacity-100 max-h-96'
                    : 'transform translate-y-8 opacity-0 max-h-0 overflow-hidden'
                }`}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {benefit.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className={`flex items-start space-x-4 p-4 bg-gray-800/50 border border-blue-500/20 rounded-lg backdrop-blur-sm transition-all duration-500 ${
                        activeSection === index
                          ? 'transform translate-x-0 opacity-100'
                          : 'transform translate-x-4 opacity-0'
                      }`}
                      style={{ transitionDelay: `${featureIndex * 100}ms` }}
                    >
                      <div className="w-3 h-3 bg-blue-400 rounded-full mt-1 flex-shrink-0 animate-pulse" />
                      <span className="text-white leading-relaxed">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Progress Indicator */}
        <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 space-y-4">
          {benefits.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-8 rounded-full transition-all duration-300 ${
                activeSection === index ? 'bg-blue-400' : 'bg-gray-600'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Dream100Benefits;