// import React from 'react';
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
  hidden: { opacity: 0, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.02,
      duration: 0.1,
      ease: [0.33, 1, 0.68, 1],
    },
  }),
};

const ResourceCard = ({ category, title, color, index }: { category: string, title: string, color: string, index: number }) => {
  const isYellow = color === 'yellow';
  
const cardStyle = {
  background: isYellow
    ? 'linear-gradient(145deg, #2D3748, #1A202C)'
    : 'linear-gradient(145deg, #1F2A2E, #1C2E29)', // 👈 THIS IS THE LINE TO CHANGE
  boxShadow: '0 10px 30px rgba(0,0,0,0.2), 0 1px 4px rgba(0,0,0,0.1)',
};


  const borderGradient = isYellow 
    ? 'from-brand-yellow to-brand-yellow/80' 
    : 'from-brand-green to-brand-green/80';

  const iconBg = isYellow 
    ? 'bg-gradient-to-br from-brand-yellow to-brand-yellow/90' 
    : 'bg-gradient-to-br from-brand-green to-brand-green/90';
    
  const categoryText = isYellow ? 'text-brand-yellow' : 'text-brand-green';

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
          {/* Updated category text with better contrast */}
          <div className={`font-bold text-sm ${categoryText} mb-4 tracking-wide px-3 py-1 rounded-lg bg-gray-900/50 inline-block`}>
            {category}
          </div>
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
    <section className="py-0 md:-py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 md:mb-10">
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