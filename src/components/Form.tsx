import { useState } from "react";

const Dream100Membership = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    businessName: "",
    phone: "",
    email: "",
    location: "",
    turnover: "",
    source: ""
  });

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log("Dream100 membership:", formData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section className="py-24 px-6 bg-black relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
          CLAIM YOUR
          <br />
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            MEMBERSHIP
          </span>
        </h2>
        
        <p className="text-xl text-gray-400 mb-16 max-w-2xl mx-auto leading-relaxed">
          Join the elite community of entrepreneurs scaling to 100x growth. Your transformation begins now.
        </p>

        <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-blue-500/30 rounded-lg p-8 md:p-12 relative overflow-hidden max-w-3xl mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-20 pointer-events-none" />
          
          <div className="relative z-10">
            <div className="mb-8">
              <div className="inline-flex items-center gap-4 mb-4">
                <span className="text-sm text-gray-400 line-through">₹4,999</span>
                <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-2 rounded-lg font-bold text-sm">
                  SAVE 80%
                </div>
              </div>
              
              <div className="text-6xl md:text-7xl font-black bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                ₹999
              </div>
              
              <div className="text-gray-400">
                One-time investment in your success
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name *"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange("firstName", e.target.value)}
                  className="bg-gray-800 border border-gray-600 text-white placeholder:text-gray-400 px-4 py-3 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                  required
                />
                
                <input
                  type="text"
                  placeholder="Last Name *"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange("lastName", e.target.value)}
                  className="bg-gray-800 border border-gray-600 text-white placeholder:text-gray-400 px-4 py-3 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                  required
                />
              </div>
              
              <input
                type="text"
                placeholder="Business Name *"
                value={formData.businessName}
                onChange={(e) => handleInputChange("businessName", e.target.value)}
                className="w-full bg-gray-800 border border-gray-600 text-white placeholder:text-gray-400 px-4 py-3 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                required
              />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="tel"
                  placeholder="WhatsApp Number *"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  className="bg-gray-800 border border-gray-600 text-white placeholder:text-gray-400 px-4 py-3 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                  required
                />
                
                <input
                  type="email"
                  placeholder="Email *"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="bg-gray-800 border border-gray-600 text-white placeholder:text-gray-400 px-4 py-3 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                  required
                />
              </div>

              <button 
                type="submit"
                className="w-full py-6 text-xl font-black bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-blue-500/25"
              >
                BECOME A MEMBER TODAY
              </button>
            </form>

            <div className="mt-8 flex items-center justify-center gap-8 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                Instant Access
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                7-Day Guarantee
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                Secure Payment
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Dream100Membership;