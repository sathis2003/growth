import { useEffect, useState } from "react";

const Dream100Stats = () => {
  const [counts, setCounts] = useState({ members: 0, growth: 0, hours: 0 });
  
  useEffect(() => {
    const targets = { members: 10000, growth: 96, hours: 20 };
    const duration = 2000;
    const steps = 60;
    const stepTime = duration / steps;
    
    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      
      setCounts({
        members: Math.round(targets.members * progress),
        growth: Math.round(targets.growth * progress),
        hours: Math.round(targets.hours * progress)
      });
      
      if (step >= steps) clearInterval(timer);
    }, stepTime);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="text-5xl font-black text-blue-400 mb-4">
              {counts.members.toLocaleString()}+
            </div>
            <div className="text-xl text-gray-300">Successful Members</div>
          </div>
          
          <div className="text-center">
            <div className="text-5xl font-black text-purple-400 mb-4">
              {counts.growth}%
            </div>
            <div className="text-xl text-gray-300">See Growth in 30 Days</div>
          </div>
          
          <div className="text-center">
            <div className="text-5xl font-black text-green-400 mb-4">
              {counts.hours}+
            </div>
            <div className="text-xl text-gray-300">Hours Saved Weekly</div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Dream100Stats;