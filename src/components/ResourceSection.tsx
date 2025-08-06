import React from 'react';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const cardData = [
  {
    category: "Vietnam Market Entry",
    title: "Expand your<br />foreign business",
    color: "yellow",
  },
  {
    category: "Business Consulting",
    title: "Optimize your<br />Strategies",
    color: "green",
  },
  {
    category: "Legal & Compliance",
    title: "Stay<br />compliant",
    color: "yellow",
  },
  {
    category: "Operational Support",
    title: "Grow your<br />Vietnam business",
    color: "green",
  },
];

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: [0.25, 1, 0.5, 1], // A more dynamic ease
    },
  }),
};

// --- New, High-Impact Card Component ---
const ResourceCard = ({ category, title, color, index }: { category: string, title: string, color: string, index: number }) => {
  const isYellow = color === 'yellow';
  
  const cardStyle = {
    background: 'linear-gradient(145deg, #2D3748, #1A202C)', // Rich dark gradient
    boxShadow: '0 10px 30px rgba(0,0,0,0.2), 0 1px 4px rgba(0,0,0,0.1)',
  };

  const borderGradient = isYellow 
    ? 'from-yellow-400 to-amber-500' 
    : 'from-green-400 to-emerald-500';

  const iconBg = isYellow 
    ? 'bg-gradient-to-br from-yellow-400 to-amber-500' 
    : 'bg-gradient-to-br from-green-400 to-emerald-500';
    
  const categoryText = isYellow ? 'text-yellow-400' : 'text-green-400';

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      custom={index}
      viewport={{ once: true, amount: 0.6 }}
      className="rounded-3xl p-1 relative group overflow-hidden"
      style={cardStyle}
    >
      {/* Metallic Border Effect */}
      <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${borderGradient} opacity-60 group-hover:opacity-100 transition-opacity duration-400`}></div>
      
      <div className="relative z-10 p-8 h-full flex flex-col justify-between bg-gray-800/80 rounded-[1.4rem] backdrop-blur-sm">
        <div>
          <div className={`font-bold text-sm ${categoryText} mb-4 tracking-wide`}>{category}</div>
          <h3 className="text-4xl font-extrabold mb-8 text-white" dangerouslySetInnerHTML={{ __html: title }} />
        </div>
        
        <div className={`w-20 h-20 rounded-xl flex items-center justify-center cursor-pointer ${iconBg} shadow-lg group-hover:scale-105 transition-transform`}>
          <ChevronRight className="w-10 h-10 text-white" />
        </div>
      </div>
    </motion.div>
  );
};


const ResourceSection = () => {
  return (
    <section className="pb-20 pt-16 lg:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-left text-brand-dark">
            Find the right solution.
          </h2>
        </div>

        {/* Grid for all 4 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {cardData.map((card, index) => (
            <ResourceCard key={index} {...card} index={index} />
          ))}
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