const Dream100Tools = () => {
  const tools = [
    {
      category: "Premium Business Tools",
      count: "15+ Scaling Tools",
      items: [
        "Risk Analysis Tool",
        "Profit Margin Calculator", 
        "100× Limiting Belief Assessment",
        "Financial Modeling Templates"
      ],
      icon: "🛠️"
    },
    {
      category: "Ready-to-Use Templates",
      count: "200+ Templates",
      items: [
        "Manufacturing Scale-up Templates",
        "E-commerce Expansion Guides",
        "Pitch Deck Templates",
        "Business Plan Blueprints"
      ],
      icon: "📋"
    },
    {
      category: "Expert Community Access",
      count: "24 Live Sessions",
      items: [
        "Digital Marketing with AI",
        "GST Tax Optimization",
        "Team Building Strategy",
        "Private Community Forums"
      ],
      icon: "👥"
    }
  ];

  return (
    <section className="py-24 px-6 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-black text-center text-white mb-16 leading-tight">
          EVERYTHING YOU NEED
          <br />
          <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            TO SCALE
          </span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tools.map((tool, index) => (
            <div 
              key={index}
              className="bg-gray-800 border border-gray-700 rounded-lg p-8 group hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-200">
                {tool.icon}
              </div>
              
              <h3 className="text-xl font-bold text-blue-400 mb-2">
                {tool.category}
              </h3>
              
              <p className="text-gray-400 mb-6 text-sm">
                {tool.count}
              </p>
              
              <ul className="space-y-3">
                {tool.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-3 text-gray-300">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Dream100Tools;