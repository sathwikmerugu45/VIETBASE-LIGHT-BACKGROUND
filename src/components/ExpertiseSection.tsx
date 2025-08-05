import { Shield, Globe, Zap, Link, ChevronLeft, ChevronRight } from 'lucide-react';

const ExpertiseSection = () => {
  return (
    <section className="bg-white text-gray-800 py-8 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Heading & Intro */}
        <div className="mb-2 px-4 md:px-8 lg:px-0">
  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-left text-gray-800 leading-snug">
    If you want to do business in Vietnam,<br className="hidden sm:block" />
    you will need an <span className="text-gray-800">expert</span>.
  </h2>
  <p className="text-sm sm:text-base text-gray-600 mt-4 leading-relaxed w-full sm:whitespace-nowrap">
  We know how to navigate the complexities and challenges of the regional regulatory environment to make your Vietnam & Asia expansion compliant & seamless.
</p>

</div>

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
    {/* Card 1 - Blue */}
    <div className="bg-light-gray rounded-xl border-2 border-yellow-400 shadow-lg w-50 overflow-hidden">
      {/* Top Section */}
      <div className="flex flex-col items-center pt-6 pb-4"> {/* Reduced pt-8 to pt-6 */}
        <div className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-yellow-400 bg-yellow-400/10">
          <Shield
            className="w-6 h-6 text-yellow-500"
            style={{
              filter: 'brightness(1.5) drop-shadow(0 0 3px #facc15)',
            }}
          />
        </div>
        <h3 className="text-gray-800 font-bold text-lg text-center mt-3 leading-tight">
          Local<br />Knowledge
        </h3>
      </div>

      {/* Bottom Section */}
      <div className="bg-gray-200 px-5 py-4 rounded-b-xl border-t border-gray-300">
        <p className="text-gray-600 text-sm leading-relaxed text-center">
          Our specialist team has grassroots knowledge<br />
          and an acute local understanding.
        </p>
      </div>
    </div>

    <div className="bg-light-gray rounded-xl border-2 border-yellow-400 shadow-lg w-50 overflow-hidden">
      {/* Top Section */}
      <div className="flex flex-col items-center pt-6 pb-4"> {/* Reduced pt-8 to pt-6 */}
        <div className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-yellow-400">
          <Globe
            className="w-6 h-6 text-yellow-500"
            style={{
              filter: 'brightness(1.5) drop-shadow(0 0 3px #facc15)',
            }}
          />
        </div>
        <h3 className="text-gray-800 font-bold text-lg text-center mt-3 leading-tight">
          Global<br />Network
        </h3>
      </div>

      {/* Bottom Section */}
      <div className="bg-gray-200 px-5 py-4 rounded-b-xl">
        <p className="text-gray-600 text-sm leading-relaxed text-center">
          Our specialist team has grassroots knowledge<br />
          and an acute local understanding.
        </p>
      </div>
    </div>

    <div className="bg-light-gray rounded-xl border-2 border-yellow-400 shadow-lg w-50 overflow-hidden">
      {/* Top Section */}
      <div className="flex flex-col items-center pt-6 pb-4"> {/* Reduced pt-8 to pt-6 */}
        <div className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-yellow-400">
          <Zap
            className="w-6 h-6 text-yellow-500"
            style={{
              filter: 'brightness(1.5) drop-shadow(0 0 3px #facc15)',
            }}
          />
        </div>
        <h3 className="text-gray-800 font-bold text-lg text-center mt-3 leading-tight">
          Fast<br />Execution
        </h3>
      </div>

      {/* Bottom Section */}
      <div className="bg-gray-200 px-5 py-4 rounded-b-xl">
        <p className="text-gray-600 text-sm leading-relaxed text-center">
          Our specialist team has grassroots knowledge<br />
          and an acute local understanding.
        </p>
      </div>
    </div>

    <div className="bg-light-gray rounded-xl border-2 border-yellow-400 shadow-lg w-50 overflow-hidden">
      {/* Top Section */}
      <div className="flex flex-col items-center pt-6 pb-4"> {/* Reduced pt-8 to pt-6 */}
        <div className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-yellow-400">
          <Link
            className="w-6 h-6 text-yellow-500"
            style={{
              filter: 'brightness(1.5) drop-shadow(0 0 3px #facc15)',
            }}
          />
        </div>
        <h3 className="text-gray-800 font-bold text-lg text-center mt-3 leading-tight">
          Connected<br />Services
        </h3>
      </div>

      {/* Bottom Section */}
      <div className="bg-gray-200 px-5 py-4 rounded-b-xl">
        <p className="text-gray-600 text-sm leading-relaxed text-center">
          Our specialist team has grassroots knowledge<br />
          and an acute local understanding.
        </p>
      </div>
    </div>
  </div>
</div>

       {/* Tax Guide Resource - Compact Version */}
<div className="bg-gradient-to-r from-blue-100 via-teal-50 to-teal-100 rounded-3xl p-6 sm:p-8 mt-18 relative overflow-hidden max-w-5xl mx-auto">
  {/* Navigation Arrows */}
  <div className="absolute right-4 top-4 sm:right-6 sm:top-6 z-10">
    <div className="flex space-x-2">
      <button className="w-8 h-8 sm:w-10 sm:h-10 bg-teal-500 rounded-full flex items-center justify-center">
        <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
      </button>
      <button className="w-8 h-8 sm:w-10 sm:h-10 bg-teal-500 rounded-full flex items-center justify-center">
        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
      </button>
    </div>
  </div>

  {/* Content */}
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
    <div className="bg-white rounded-2xl p-4 w-full max-w-xs">
      <div className="w-full h-40 bg-gradient-to-br from-red-500 via-teal-500 to-blue-500 rounded-xl mb-3 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute bottom-3 left-3 text-white">
          <div className="text-xl font-bold">Vietnam tax</div>
          <div className="text-md">guide</div>
        </div>
      </div>
    </div>

    <div className="space-y-4">
      <div className="text-yellow-500 text-xs sm:text-sm font-medium">Free resource</div>
      <h3 className="text-2xl sm:text-3xl font-bold leading-snug text-gray-800">
        Taxation in Vietnam: Complete<br />
        guide (2025)<span className="text-yellow-500">.</span>
      </h3>
      <p className="text-base sm:text-lg text-gray-600">
        A comprehensive guide covering taxation in Vietnam for both corporate and individual taxpayers.
      </p>
      <button className="bg-yellow-500 text-white px-5 py-2 text-sm sm:text-base rounded-full font-semibold hover:bg-yellow-600 transition-colors">
        Download
      </button>
    </div>
  </div>
</div>
      </div>
    </section>
  );
};

export default ExpertiseSection;