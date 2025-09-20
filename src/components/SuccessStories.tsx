const Dream100SuccessStories = () => {
  const stories = [
    {
      name: "Rajesh Kumar",
      business: "Manufacturing",
      growth: "250% Revenue Growth",
      testimonial: "The Dream100 framework transformed our manufacturing business. We scaled from ₹2 crore to ₹5 crore revenue in just 18 months.",
      image: "👨‍💼"
    },
    {
      name: "Priya Sharma",
      business: "E-commerce",
      growth: "400% Team Expansion",
      testimonial: "From a team of 5 to 20 members in 2 years. The scaling templates made hiring and training systematic and efficient.",
      image: "👩‍💻"
    },
    {
      name: "Amit Patel",
      business: "Tech Startup",
      growth: "₹10 Crore Valuation",
      testimonial: "The pitch deck templates and investor frameworks helped us raise funding and achieve unicorn trajectory.",
      image: "🚀"
    }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-black to-gray-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-black text-center text-white mb-16 leading-tight">
          SUCCESS
          <br />
          <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            STORIES
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <div
              key={index}
              className="bg-gray-800 border border-gray-700 rounded-lg p-8 hover:border-blue-500/30 hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10"
            >
              <div className="text-4xl mb-4">{story.image}</div>
              <h3 className="text-xl font-bold text-white mb-2">{story.name}</h3>
              <p className="text-blue-400 text-sm mb-4">{story.business}</p>
              <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 text-green-400 text-sm font-bold px-4 py-2 rounded-full mb-6 inline-block">
                {story.growth}
              </div>
              <p className="text-gray-300 leading-relaxed italic">"{story.testimonial}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Dream100SuccessStories;