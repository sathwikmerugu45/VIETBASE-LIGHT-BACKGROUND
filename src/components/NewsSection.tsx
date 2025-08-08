import React from 'react';
import { ChevronRight, Calendar, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const newsItems = [
  {
    title: "Vietnam's new Personal Data Protection Law: What businesses...",
    date: "July 25, 2025",
    category: "Insights",
    imageUrl: "https://images.pexels.com/photos/3184454/pexels-photo-3184454.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    title: "Vietnam's new Corporate Income Tax Law: Strategic overhaul...",
    date: "July 7, 2025", 
    category: "Insights",
    imageUrl: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    title: "Quarterly Vietnam HR & Payroll Updates July 2025",
    date: "July 3, 2025",
    category: "Insights", 
    imageUrl: "https://images.pexels.com/photos/3184433/pexels-photo-3184433.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
];


const NewsSection = () => {
  return (
    <section className="py-0 md:py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* News Header */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 md:mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-dark">
            Latest News & Insights<span className="text-brand-yellow"></span>
          </h2>
          <button className="text-base text-gray-500 hover:text-brand-dark font-semibold transition-colors mt-4 sm:mt-0 group flex items-center gap-2">
            View all
            <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* Enhanced News Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 md:mb-12">
          {newsItems.map((item, index) => (
            <motion.div 
              key={index} 
              className="group cursor-pointer relative overflow-hidden rounded-3xl shadow-2xl bg-white hover:shadow-3xl transition-all duration-500"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: index * 0.1, duration: 0.7, ease: "easeOut" }}
              whileHover={{ 
                y: -12, 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              {/* Image Container with Overlay */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                
                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-300"></div>
                
                {/* Category badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  <span className="text-xs font-semibold text-gray-800 uppercase tracking-wide">
                    {item.category}
                  </span>
                </div>
                
                {/* Arrow icon */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                  <ArrowUpRight className="w-4 h-4 text-gray-800" />
                </div>
                
                {/* Bottom content overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-2 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex items-center space-x-2 mb-2 opacity-90">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm font-medium">{item.date}</span>
                  </div>
                </div>
              </div>
              
              {/* Content Area */}
              <div className="px-6 pt-6 pb-4 bg-white relative">
                {/* Decorative accent line */}
                <div className="absolute top-0 left-6 w-12 h-1 bg-gradient-to-r from-brand-yellow to-brand-green"></div>
                
                <h3 className="text-xl font-bold mb-4 group-hover:text-brand-green transition-colors text-brand-dark leading-tight pt-2">
                  {item.title}
                </h3>
                
                {/* Date and category info */}
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span className="font-medium">{item.date}</span>
                  <span className="px-2 py-1 bg-gray-100 rounded-full text-xs font-semibold">
                    {item.category}
                  </span>
                </div>
                
                {/* Read more indicator */}
                <div className="mt-4 flex items-center text-brand-green font-semibold text-sm opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                  <span>Read more</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </div>
              </div>
              
              {/* Card border effect */}
              <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-brand-green/20 transition-all duration-300"></div>
            </motion.div>
          ))}
        </div>

        {/* --- Restored Upcoming & recent events section --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Left Column */}
          <div>
            <h3 className="text-3xl font-bold mt-0 mb-6 md:mb-8 text-brand-dark">
              Upcoming & Recent Events
            </h3>
            <div className="space-y-6">
              {events.map((event, index) => (
                <div key={index} className="flex items-start space-x-4 group cursor-pointer">
                  <div className="w-5 h-5 bg-brand-yellow rounded flex-shrink-0 mt-1"></div>
                  <div className="flex-1">
                    <h4 className="text-base font-semibold group-hover:text-brand-yellow transition-colors mb-1 text-brand-dark">
                      {event.title}
                    </h4>
                    <div className="text-sm text-gray-500">{event.date}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column (as per the image showing duplicated content) */}
          <div className="hidden lg:block">
            <h3 className="text-3xl font-bold mb-8 text-transparent select-none">
              Upcoming & recent events
            </h3>
            <div className="space-y-6">
              {events.map((event, index) => (
                <div key={index} className="flex items-start space-x-4 group cursor-pointer">
                  <div className="w-5 h-5 bg-brand-yellow rounded flex-shrink-0 mt-1"></div>
                  <div className="flex-1">
                    <h4 className="text-base font-semibold group-hover:text-brand-yellow transition-colors mb-1 text-brand-dark">
                      {event.title}
                    </h4>
                    <div className="text-sm text-gray-500">{event.date}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center space-x-2 mt-6">
          <div className="w-2.5 h-2.5 bg-brand-green rounded-full"></div>
          <div className="w-2.5 h-2.5 bg-gray-300 rounded-full"></div>
          <div className="w-2.5 h-2.5 bg-gray-300 rounded-full"></div>
          <div className="w-2.5 h-2.5 bg-gray-300 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;