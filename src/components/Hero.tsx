import { useState } from "react";

const Dream100Hero = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60" />
        <div className="absolute top-0 left-0 w-32 h-32 bg-blue-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-7xl mx-auto">
        <div className="mb-6">
          <span className="inline-block px-4 py-2 bg-blue-500/20 text-blue-300 text-sm font-bold rounded-full border border-blue-400/30 animate-pulse">
            10,000+ SUCCESSFUL ENTREPRENEURS
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-tight">
          SCALE YOUR
          <br />
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
            DREAM100
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          Join thousands of entrepreneurs who've achieved 100x growth using our proven framework, 
          powerful systems, and expert community.
        </p>

        {/* Video Section */}
        <div className="mb-12 max-w-4xl mx-auto">
          <div className="relative group">
            {!showVideo ? (
              <div 
                onClick={() => setShowVideo(true)}
                className="relative bg-gray-800/50 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-8 cursor-pointer hover:border-blue-400/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/20"
              >
                {/* Video Thumbnail */}
                <div className="relative h-64 md:h-80 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-xl flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10" />
                  
                  {/* Play Button */}
                  <div className="relative z-10 w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-blue-500/50">
                    <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  
                  {/* Pulse Animation */}
                  <div className="absolute w-20 h-20 bg-blue-400/20 rounded-full animate-ping" />
                  <div className="absolute w-32 h-32 bg-purple-400/10 rounded-full animate-pulse" />
                  
                  {/* Corner Elements */}
                  <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-blue-400/50 rounded-tl-lg" />
                  <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-purple-400/50 rounded-tr-lg" />
                  <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-blue-400/50 rounded-bl-lg" />
                  <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-purple-400/50 rounded-br-lg" />
                </div>
                
                {/* Video Title */}
                <div className="mt-6">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                    Watch: How Dream100 Transforms Businesses
                  </h3>
                  <p className="text-gray-400 text-sm md:text-base">
                    See real success stories and learn about our proven framework • 3 min overview
                  </p>
                </div>
                
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ) : (
              <div className="relative bg-gray-800/50 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-4 animate-fade-in">
                {/* Video Player */}
                <div className="relative h-64 md:h-80 bg-black rounded-xl overflow-hidden">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1"
                    title="Dream100 Club Overview"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                  
                  {/* Close Button */}
                  <button
                    onClick={() => setShowVideo(false)}
                    className="absolute top-4 right-4 w-8 h-8 bg-gray-900/80 hover:bg-gray-700 text-white rounded-full flex items-center justify-center transition-colors duration-200"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
        
        <button 
          onClick={() => document.querySelector('[data-section="membership"]')?.scrollIntoView({ behavior: 'smooth' })}
          className="px-12 py-6 text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-blue-500/25"
        >
          BECOME A MEMBER - ₹999
        </button>
        
        <div className="mt-8 flex items-center justify-center gap-8 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            7-day Guarantee
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Instant Access
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            4.9/5 Rating
          </div>
        </div>
      </div>
    </section>
  );
};
export default Dream100Hero;