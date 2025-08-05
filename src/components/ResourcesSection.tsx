import React from 'react';

const ResourcesSection = () => {
  const resources = [
    {
      category: "Formation",
      title: "eID Implementation Guideline for Businesses via VNeID",
      color: "bg-gradient-to-br from-gray-700 to-gray-600",
      icon: "🔧"
    },
    {
      category: "Formation", 
      title: "Vietnam semiconductor brief (2024)",
      color: "bg-gradient-to-br from-teal-600 to-teal-400",
      icon: "💎"
    },
    {
      category: "Formation",
      title: "Consular legalisation of foreign documents used in Vietnam", 
      color: "bg-gradient-to-br from-yellow-500 to-yellow-400",
      icon: "📋"
    }
    // ... other resources
  ];

  return (
    <section className="bg-black text-white py-18">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
            <span className="text-yellow-400 font-medium">Resources</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Get the facts you need to make the<br />
            right business decisions<span className="text-yellow-400">.</span>
          </h2>
          
          {/* Category tabs */}
          <div className="flex justify-center space-x-8 mb-12">
            <button className="text-yellow-400 font-semibold border-b-2 border-yellow-400 pb-2">
              Accounting & tax
            </button>
            <button className="text-gray-400 hover:text-yellow-400 pb-2">
              Formation
            </button>
            <button className="text-gray-400 hover:text-yellow-400 pb-2">
              HR & payroll
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left side - Large featured resource */}
          <div className="relative">
            <div className="w-full h-96 rounded-3xl overflow-hidden bg-gradient-to-br from-yellow-400 to-yellow-600 relative">
              <div className="absolute inset-0 bg-black/40"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-6xl mb-4">📊</div>
                  <div className="text-2xl font-bold">Vietnam Business</div>
                  <div className="text-xl">Resource Guide</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Resource list */}
          <div className="space-y-6">
            {resources.map((resource, index) => (
              <div key={index} className="flex items-start space-x-4 group cursor-pointer">
                <div className={`w-12 h-12 rounded-full ${resource.color} flex items-center justify-center text-white flex-shrink-0`}>
                  <span className="text-lg">{resource.icon}</span>
                </div>
                <div className="flex-1">
                  <div className="text-sm text-yellow-400 font-medium mb-1">{resource.category}</div>
                  <h3 className="font-semibold text-white group-hover:text-yellow-400 transition-colors">
                    {resource.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;