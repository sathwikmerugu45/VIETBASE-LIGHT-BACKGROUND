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
    <section className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-left text-brand-dark">
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