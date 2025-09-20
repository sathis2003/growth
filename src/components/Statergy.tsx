// Data for the briefing cards. This can be fetched from an API in a real application.
const briefings = [
  {
    date: "28 SEP 2025",
    time: "18:00 IST",
    title: "AI-DRIVEN MARKETING MASTERY",
    expert: "Digital Strategist, Anna D'Souza",
    summary: "Learn to deploy three new AI tools that will automate your lead generation and cut ad spend by 40%."
  },
  {
    date: "02 OCT 2025", 
    time: "19:30 IST",
    title: "CRUSHING COMPETITION ANALYSIS",
    expert: "Market Intelligence Expert, Rajesh Kumar",
    summary: "Advanced techniques to identify competitor weaknesses and exploit market gaps for dominant positioning."
  },
  {
    date: "05 OCT 2025",
    time: "17:00 IST", 
    title: "HIGH-IMPACT SCALING STRATEGIES",
    expert: "Growth Architect, Priya Sharma",
    summary: "The exact framework used by 7-figure entrepreneurs to scale operations without burning out."
  },
  {
    date: "09 OCT 2025",
    time: "20:00 IST",
    title: "PSYCHOLOGICAL SALES WARFARE",
    expert: "Conversion Psychologist, Dr. Michael Chen",
    summary: "Master the mental triggers that compel prospects to buy, even in highly competitive markets."
  },
  {
    date: "12 OCT 2025",
    time: "18:30 IST",
    title: "FINANCIAL DOMINANCE BLUEPRINT", 
    expert: "Investment Strategist, Sarah Williams",
    summary: "Build multiple income streams and create lasting wealth while maintaining market leadership."
  }
];

/**
 * A component to display upcoming strategic briefing sessions with a horizontal scroll.
 * Theme updated to blue-400. Scrollbar hidden.
 */
const StrategicBriefings = () => {
  const scrollToOffer = () => {
    const offerSection = document.querySelector('[data-section="territory"]');
    if (offerSection) {
      offerSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="py-24 px-6 bg-[#0A0210] border-t border-blue-400/20">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-monument font-black text-white mb-6 tracking-tight">
            UPCOMING
            <br />
            <span className="text-blue-400 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">
              STRATEGIC BRIEFINGS
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-inter">
            High-level intelligence sessions. Free for all members of the pack.
          </p>
        </div>

        {/* Horizontal Scrolling Briefings Container */}
        <div className="relative">
          <div className="flex gap-8 overflow-x-auto pb-6 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {briefings.map((briefing, index) => (
              <div
                key={index}
                className="
                  flex-shrink-0 w-80 md:w-96 bg-black/30 backdrop-blur-sm 
                  border border-white/10 rounded-lg p-8 group cursor-pointer 
                  hover:-translate-y-2 transition-all duration-300 snap-center
                  hover:shadow-[0_0_25px_rgba(59,130,246,0.4)]
                "
                onClick={scrollToOffer}
              >
                {/* Date & Time */}
                <div className="flex items-center justify-between mb-6">
                  <div className="text-sm font-monument text-blue-400 tracking-wider">
                    {briefing.date}
                  </div>
                  <div className="text-sm font-monument text-gray-400">
                    {briefing.time}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-monument font-bold text-white mb-4 leading-tight">
                  {briefing.title}
                </h3>

                {/* Expert */}
                <p className="text-gray-400 font-inter mb-4 text-sm">
                  With {briefing.expert}
                </p>

                {/* Summary */}
                <p className="text-gray-400 font-inter mb-8 leading-relaxed">
                  {briefing.summary}
                </p>

                {/* CTA */}
                <div className="flex items-center text-blue-400 font-monument font-bold text-sm tracking-wide group-hover:text-white transition-colors duration-200">
                  ACCESS IS FOR MEMBERS ONLY
                  <svg 
                    className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>

                {/* Hover Glow */}
                <div className="absolute inset-0 border-2 border-blue-400 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none" />
              </div>
            ))}
          </div>

          {/* Scroll Indicators */}
          <div className="flex justify-center mt-8 gap-2">
            {briefings.map((_, index) => (
              <div 
                key={index}
                className="w-2 h-2 rounded-full bg-blue-400/30"
              />
            ))}
          </div>
        </div>

        {/* Urgency Indicator */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-3 bg-blue-400/10 border border-blue-400/30 rounded-lg px-6 py-3">
            <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse" />
            <span className="text-blue-400 font-monument font-bold text-sm tracking-wide">
              NEXT BRIEFING IN 3 DAYS
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrategicBriefings;