import { useEffect, useState } from "react";

const Dream100Urgency = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 3, hours: 14, minutes: 32, seconds: 45 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 px-6 bg-gradient-to-r from-red-900/20 to-orange-900/20 border-t border-red-500/30">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-2xl md:text-4xl font-black text-white mb-8">
          LIMITED TIME: 80% OFF EXPIRES IN
        </h3>
        
        <div className="flex justify-center gap-4 md:gap-8 mb-8">
          {[
            { label: 'DAYS', value: timeLeft.days },
            { label: 'HOURS', value: timeLeft.hours },
            { label: 'MINUTES', value: timeLeft.minutes },
            { label: 'SECONDS', value: timeLeft.seconds }
          ].map((time, index) => (
            <div key={index} className="bg-gray-800 border border-red-500/30 rounded-lg p-4 min-w-20">
              <div className="text-3xl md:text-4xl font-black text-red-400 mb-2">
                {time.value.toString().padStart(2, '0')}
              </div>
              <div className="text-xs text-gray-400 font-bold">
                {time.label}
              </div>
            </div>
          ))}
        </div>
        
        <p className="text-xl text-gray-300 mb-8">
          Join 10,000+ entrepreneurs before the price increases to ₹4,999
        </p>
        
        <button 
          onClick={() => document.querySelector('[data-section="membership"]')?.scrollIntoView({ behavior: 'smooth' })}
          className="px-12 py-6 text-xl font-black bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white rounded-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-red-500/25 animate-pulse"
        >
          SECURE YOUR SPOT NOW
        </button>
      </div>
    </section>
  );
};
export default Dream100Urgency;