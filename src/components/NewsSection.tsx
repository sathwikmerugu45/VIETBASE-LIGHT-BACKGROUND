import React from 'react';
import { ChevronRight } from 'lucide-react';

const NewsSection = () => {
  const newsItems = [
    {
      title: "Vietnam's new Personal Data Protection Law: What businesses...",
      date: "July 25, 2025",
      category: "Insights",
      color: "bg-teal-400"
    },
    {
      title: "Vietnam's new Corporate Income Tax Law: Strategic overhaul...",
      date: "July 7, 2025", 
      category: "Insights",
      color: "bg-gradient-to-br from-teal-400 to-blue-500"
    },
    {
      title: "Quarterly Vietnam HR & Payroll Updates July 2025",
      date: "July 3, 2025",
      category: "Insights", 
      color: "bg-gradient-to-br from-yellow-400 to-red-500"
    }
  ];

  const podcasts = [
    {
      title: "Key role of the CFO: needs and benefits for investors in Vietnam",
      episode: "Episode 44"
    },
    {
      title: "Deep dive into ESG in Vietnam: what businesses need to know",
      episode: "Episode 43"
    },
    {
      title: "Vietnam Personal Data Protection Decree explained: compliance practices and strategies",
      episode: "Episode 42"
    }
  ];

  const events = [
    {
      title: "Vietnam new personal data protection law: Compliance readiness & practical implementation",
      date: "July 24, 2025"
    },
    {
      title: "Expand your trading business in Vietnam: Market entry and online growth strategies", 
      date: "July 10, 2025"
    },
    // {
    //   title: "Developments in Vietnam's Tax Landscape – An overview of key changes in the past 12 months and what",
    //   date: "July 8, 2025"
    // }
  ];

  return (
    <section className="bg-white text-gray-800 py-0">
  <div className="max-w-7xl mx-auto px-4 sm:px-6">
    {/* News Header */}
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 sm:mb-12">
      <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-800">
        Latest news & insights<span className="text-gray-400">.</span>
      </h2>
      <button className="text-sm sm:text-base text-gray-500 hover:text-gray-800 transition-colors mt-2 sm:mt-0">
        View all News & insights
      </button>
    </div>

    {/* News Cards */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-16">
      {newsItems.map((item, index) => (
        <div key={index} className="group cursor-pointer">
          <div className={`${item.color} h-48 sm:h-64 rounded-2xl mb-3 sm:mb-4 relative overflow-hidden`}>
            {index === 0 && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-yellow-400 rounded-full"></div>
              </div>
            )}
            {index === 2 && (
              <div className="absolute inset-0 p-4 sm:p-6">
                <div className="w-10 h-6 sm:w-12 sm:h-8 bg-teal-400 rounded mb-3"></div>
                <div className="w-6 h-10 sm:w-8 sm:h-12 bg-red-600 rounded"></div>
              </div>
            )}
          </div>
          <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2 group-hover:text-yellow-500 transition-colors text-gray-800">
            {item.title}
          </h3>
          <div className="text-xs sm:text-sm text-gray-500">
            {item.date} | {item.category}
          </div>
        </div>
      ))}
    </div>

    {/* Podcasts and Events */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
      {/* Upcoming & recent events */}
      <div>
        <h3 className="text-xl sm:text-3xl font-bold mb-6 sm:mb-8 text-gray-800">
          Upcoming & recent events
        </h3>
        <div className="space-y-4 sm:space-y-6">
          {events.map((event, index) => (
            <div key={index} className="flex items-start space-x-3 sm:space-x-4 group cursor-pointer">
              <div className="w-4 h-4 sm:w-6 sm:h-6 bg-yellow-400 rounded flex-shrink-0 mt-1"></div>
              <div className="flex-1">
                <h4 className="text-sm sm:text-base font-semibold group-hover:text-yellow-500 transition-colors mb-1 text-gray-800">
                  {event.title}
                </h4>
                <div className="text-xs sm:text-sm text-gray-500">{event.date}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right column left blank intentionally */}
      <div>
        <h3 className="text-xl sm:text-2xl font-bold mb-0 sm:mb-16 text-gray-800"></h3>
        <div className="space-y-4 sm:space-y-6">
          {events.map((event, index) => (
            <div key={index} className="flex items-start space-x-3 sm:space-x-4 group cursor-pointer">
              <div className="w-4 h-4 sm:w-6 sm:h-6 bg-yellow-400 rounded flex-shrink-0 mt-1"></div>
              <div className="flex-1">
                <h4 className="text-sm sm:text-base font-semibold group-hover:text-yellow-500 transition-colors mb-1 text-gray-800">
                  {event.title}
                </h4>
                <div className="text-xs sm:text-sm text-gray-500">{event.date}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Navigation dots */}
    <div className="flex justify-center space-x-2 mt-8 sm:mt-12">
      <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
      <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
      <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
      <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
    </div>
  </div>
</section>

  );
};

export default NewsSection;