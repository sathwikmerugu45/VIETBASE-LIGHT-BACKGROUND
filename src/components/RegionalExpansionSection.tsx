import React from 'react';

const RegionalExpansionSection = () => {
  return (
    <section className="bg-black text-white py-18 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - World Map Placeholder */}
          <div className="relative w-full h-80 sm:h-96 lg:h-full flex items-center justify-center">
  <img
    src="https://www.shutterstock.com/image-illustration/3d-illustration-networked-world-map-260nw-1091222291.jpg"
    alt="World map"
    className="w-full h-full object-contain opacity-80"
  />
</div>


          {/* Right side - Content */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Tagline */}
            <div className="flex justify-center lg:justify-start items-center space-x-2">
              <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
              <span className="text-yellow-400 font-medium text-sm sm:text-base">
                Seamless regional expansion
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Expand & operate<br />
              across Asia under<br />
              one invoice<span className="text-yellow-400">.</span>
            </h2>

            {/* Paragraph */}
            <p className="text-base sm:text-lg text-gray-400 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Thanks to our on-the-ground presence in Asia's hard-to-navigate markets and a secure client platform,
              you can expand your Vietnam business into other markets in Asia with ease and confidence.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <button className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-300 transition-colors">
                View all locations
              </button>
              <button className="border-2 border-yellow-400 text-yellow-400 px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 hover:text-black transition-colors">
                Explore solution
              </button>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10 mt-20 pt-16 border-t border-gray-800 text-center">

          <div>
            <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">18</div>
            <div className="text-gray-400 font-medium text-base">Markets</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">28</div>
            <div className="text-gray-400 font-medium text-base">Offices</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">17,000+</div>
            <div className="text-gray-400 font-medium text-base">Active Clients</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">1,700+</div>
            <div className="text-gray-400 font-medium text-base">Employees</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegionalExpansionSection;
