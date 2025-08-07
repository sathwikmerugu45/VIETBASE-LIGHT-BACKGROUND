import React from 'react';
import { ChevronRight } from 'lucide-react';
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
            Latest news & insights<span className="text-brand-yellow">.</span>
          </h2>
          <button className="text-base text-gray-500 hover:text-brand-dark font-semibold transition-colors mt-4 sm:mt-0 group flex items-center gap-2">
            View all
            <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* News Cards with Images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 md:mb-12">
          {newsItems.map((item, index) => (
            <motion.div 
              key={index} 
              className="group cursor-pointer bg-brand-green/5 backdrop-blur-lg rounded-2xl border border-white/20 shadow-xl overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: index * 0.1, duration: 0.7, ease: "easeOut" }}
              whileHover={{ y: -8, boxShadow: "0px 15px 30px rgba(0,0,0,0.1)"}}
            >
              <div className="h-56 overflow-hidden">
                <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-400" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold mb-2 group-hover:text-brand-green transition-colors text-brand-dark">
                  {item.title}
                </h3>
                <div className="text-sm text-gray-500">
                  {item.date} | {item.category}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- Restored Upcoming & recent events section --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Left Column */}
          <div>
            <h3 className="text-3xl font-bold mt-0 mb-6 md:mb-8 text-brand-dark">
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