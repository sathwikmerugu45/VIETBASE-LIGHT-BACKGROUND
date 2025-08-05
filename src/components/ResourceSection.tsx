import React from 'react';
import { ChevronRight } from 'lucide-react';

const ResourceSection = () => {
  return (
    <section className="bg-black text-white pb-0 pt-12 lg:pt-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6 md:mb-10 -mt-6 md:-mt-10 lg:-mt-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-left text-white whitespace-nowrap">
            Find the right solution
          </h2>
        </div>

        {/* Grid for all 4 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
          <div className="bg-gradient-to-br from-black-900 to-gray-800 rounded-3xl p-8 relative overflow-hidden border-2 border-yellow-400 hover:border-yellow-400 transition-all">
  <div className="relative z-10">
    <div className="font-bold text-sm text-yellow-400 mb-4">Vietnam Market Entry</div>
    <h3 className="text-3xl font-bold mb-6 text-yellow-400">
      Expand your<br />
      foreign business
    </h3>
    <div className="w-16 h-16 border-2 border-yellow-400 rounded-lg flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-colors">
      <ChevronRight className="w-8 h-8" />
    </div>
  </div>
</div>

          {/* === Card 2: Green Border === */}
          

        
          {/* === Card 4: Green Background === */}

          {/* === Card 2: Green Border === */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 relative overflow-hidden border-2 border-green-400 hover:border-green-400 transition-all">
            <div className="relative z-10">
              <div className="text-sm font-bold text-green-400 mb-4">Buisiness Consulting</div>
              <h3 className="text-3xl font-bold mb-6">
                Optimize your<br />
                Strategies
              </h3>
              <div className="w-16 h-16 border-2 border-green-400 rounded-lg flex items-center justify-center hover:bg-green-400 hover:text-black transition-colors">
                <ChevronRight className="w-8 h-8" />
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-black-900 to-gray-800 rounded-3xl p-8 relative overflow-hidden border-2 border-yellow-400 hover:border-yellow-400 transition-all">
  <div className="relative z-10">
    <div className="font-bold text-sm text-yellow-400 mb-4">Legal & Compliance</div>
    <h3 className="text-3xl font-bold mb-6 text-yellow-400">
      Stay<br />
      compliant
    </h3>
    <div className="w-16 h-16 border-2 border-yellow-400 rounded-lg flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-colors">
      <ChevronRight className="w-8 h-8" />
    </div>
  </div>
</div>
<div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 relative overflow-hidden border-2 border-green-400 hover:border-green-400 transition-all">
            <div className="relative z-10">
              <div className="text-sm font-bold text-green-400 mb-4">Operational Support</div>
              <h3 className="text-3xl font-bold mb-6">
                Grow your<br />
                Vietnam business
              </h3>
              <div className="w-16 h-16 border-2 border-green-400 rounded-lg flex items-center justify-center hover:bg-green-400 hover:text-black transition-colors">
                <ChevronRight className="w-8 h-8" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourceSection;



{/* Tax Guide Resource */}
        {/* <div className="bg-gradient-to-r from-blue-900 via-teal-700 to-teal-600 rounded-3xl p-8 lg:p-12 relative overflow-hidden">
          <div className="absolute right-8 top-8">
            <div className="flex space-x-2">
              <button className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center">
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              <button className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center">
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            </div>
          </div> */}

          {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="bg-white rounded-2xl p-6 max-w-sm">
              <div className="w-full h-48 bg-gradient-to-br from-red-500 via-teal-500 to-blue-500 rounded-xl mb-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-2xl font-bold">Vietnam tax</div>
                  <div className="text-lg">guide</div>
                </div>
              </div>
            </div> */}
{/* 
            <div className="space-y-6">
              <div className="text-yellow-400 text-sm font-medium">Free resource</div>
              <h3 className="text-4xl font-bold">
                Taxation in Vietnam: Complete<br />
                guide (2025)<span className="text-yellow-400">.</span>
              </h3>
              <p className="text-lg text-gray-300">
                A comprehensive guide covering taxation in Vietnam for both<br />
                corporate and individual taxpayers.
              </p>
              <button className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-300 transition-colors">
                Download
              </button>
            </div>
          </div> */}
        {/* </div> */}