import { useTranslation } from 'react-i18next';
import React from 'react';

const ClientStoriesSection = () => {
  return (
    <section className="bg-white text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="text-yellow-400 text-sm font-medium mb-4">● Client stories</div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Trusted by regional groups and<br />
            foreign <span className="text-white">SMEs</span><span className="text-yellow-400">.</span>
          </h2>
        </div>

        {/* Client Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Content */}
          <div className="space-y-6 text-center lg:text-left">
            <div className="mx-auto lg:mx-0 w-32 h-16 bg-purple-600 rounded flex items-center justify-center">
              <div className="text-white font-bold text-sm">GLOBAL VICTORIA</div>
            </div>

            <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Establishing a trade office for a state government rather than a national government presented a 
              unique set of challenges. Below is the story of how VIETBASE Vietnam got the job done.
            </p>

            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-white">Global Victoria</h3>
              <p className="text-gray-400">Australian government agency</p>
              <button className="text-yellow-400 hover:text-yellow-300 underline">
                Read case study
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Melbourne cityscape" 
                className="w-full h-80 sm:h-96 object-cover"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 border-2 border-teal-400 rounded-full"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-yellow-400 rounded-full"></div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center space-y-12">
          {/* Optional Map Placeholder */}
          {/* 
          <div className="flex justify-center">
            <div className="relative w-96 h-48">
              <div className="grid grid-cols-20 gap-1">
                {Array.from({ length: 400 }).map((_, i) => {
                  const isVietnamShape = Math.random() > 0.7; 
                  return (
                    <div
                      key={i}
                      className={`w-1 h-1 rounded-full ${
                        isVietnamShape ? 'bg-teal-400' : 'bg-transparent'
                      }`}
                    />
                  );
                })}
              </div>
            </div>
          </div>
          */}

          {/* <div>
            <div className="text-yellow-400 text-sm font-medium mb-4">● Seamless regional expansion</div>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Expand & operate<br />
              across <span className="text-white">Asia</span><span className="text-yellow-400">.</span>
            </h3>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default ClientStoriesSection;
