// // import React from 'react';
// import { ChevronRight } from 'lucide-react';
// import { motion } from 'framer-motion';

// const cardData = [
//   {
//     category: "Vietnam Market Entry",
//     title: "Expand your<br />foreign business",
//     color: "yellow",
//   },
//   {
//     category: "Business Consulting",
//     title: "Optimize your<br />Strategies",
//     color: "green",
//   },
//   {
//     category: "Legal & Compliance",
//     title: "Stay<br />compliant",
//     color: "yellow",
//   },
//   {
//     category: "Operational Support",
//     title: "Grow your<br />Vietnam business",
//     color: "green",
//   },
// ];

// const getCardVariants = (index: number) => {
//   const isLeftCard = index % 2 === 0; // Even indices are left cards
  
//   return {
//     hidden: { 
//       opacity: 0, 
//       x: isLeftCard ? -100 : 100, // Left cards come from left, right cards from right
//       scale: 0.9 
//     },
//     visible: {
//       opacity: 1,
//       x: 0,
//       scale: 1,
//       transition: {
//         duration: 0.8,
//         ease: [0.25, 0.46, 0.45, 0.94], // Professional easing curve
//         delay: Math.floor(index / 2) * 0.2, // Stagger by rows
//       },
//     },
//   };
// };

// const ResourceCard = ({ category, title, color, index }: { category: string, title: string, color: string, index: number }) => {
//   const isYellow = color === 'yellow';
  
//   const cardStyle = {
//     background: isYellow
//       ? 'linear-gradient(145deg, #2D3748, #1A202C)'
//       : 'linear-gradient(145deg, #1F2A2E, #1C2E29)',
//     boxShadow: '0 10px 30px rgba(0,0,0,0.2), 0 1px 4px rgba(0,0,0,0.1)',
//   };

//   const borderGradient = isYellow 
//     ? 'from-brand-yellow to-brand-yellow/80' 
//     : 'from-brand-green to-brand-green/80';

//   const iconBg = isYellow 
//     ? 'bg-gradient-to-br from-brand-yellow to-brand-yellow/90' 
//     : 'bg-gradient-to-br from-brand-green to-brand-green/90';
    
//   const categoryText = isYellow ? 'text-brand-yellow' : 'text-white';

//   return (
//     <motion.div
//       variants={getCardVariants(index)}
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, amount: 0.3 }}
//       whileHover={{ 
//         y: -8,
//         transition: { duration: 0.3, ease: "easeOut" }
//       }}
//       className="rounded-3xl p-1 relative group overflow-hidden cursor-pointer"
//       style={cardStyle}
//     >
//       {/* Metallic Border Effect */}
//       <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${borderGradient} opacity-60 group-hover:opacity-100 transition-opacity duration-400`}></div>
      
//       <div className="relative z-10 p-8 h-full flex flex-col justify-between bg-gray-800/80 rounded-[1.4rem] backdrop-blur-sm min-h-[280px]">
//         <div>
//           {/* Category badge */}
//           <div className={`font-bold text-sm ${categoryText} mb-4 tracking-wide px-3 py-1 rounded-lg bg-gray-900/50 inline-block`}>
//             {category}
//           </div>
//           <h3 className="text-4xl font-extrabold mb-8 text-white leading-tight" dangerouslySetInnerHTML={{ __html: title }} />
//         </div>
        
//         <div className={`w-20 h-20 rounded-xl flex items-center justify-center ${iconBg} shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 ease-out`}>
//           <ChevronRight className="w-10 h-10 text-white group-hover:translate-x-1 transition-transform duration-300" />
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// const ResourceSection = () => {
//   return (
//     <section className="py-0 md:-py-4">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="mb-8 md:mb-10">
//           <h2 className="text-4xl md:text-5xl font-bold text-left text-brand-dark">
//             The Right Solution For You
//           </h2>
//         </div>

//         {/* Grid for all 4 cards */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
//           {cardData.map((card, index) => (
//             <ResourceCard key={index} {...card} index={index} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ResourceSection;

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

const getCardVariants = (index) => {
  const isLeftCard = index % 2 === 0; // Even indices are left cards
  
  return {
    hidden: { 
      opacity: 0, 
      x: isLeftCard ? -100 : 100, // Left cards come from left, right cards from right
      scale: 0.9 
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94], // Professional easing curve
        delay: Math.floor(index / 2) * 0.2, // Stagger by rows
      },
    },
  };
};

const ResourceCard = ({ category, title, color, index }) => {
  const isYellow = color === 'yellow';
  
  const cardGradient = isYellow
    ? 'linear-gradient(135deg, #B8940F 0%, #DBA314 30%, #A67C0D 70%, #8B6A0A 100%)'
    : 'linear-gradient(135deg, #094A30 0%, #0D6B42 50%, #094A30 100%)';

  const cardStyle = {
    background: cardGradient,
    boxShadow: isYellow 
      ? '0 20px 40px rgba(184, 148, 15, 0.4), 0 8px 16px rgba(139, 106, 10, 0.3)' 
      : '0 20px 40px rgba(9, 74, 48, 0.3), 0 8px 16px rgba(9, 74, 48, 0.2)',
  };

  const borderGradient = isYellow 
    ? 'from-yellow-300 via-yellow-200 to-yellow-300' 
    : 'from-green-300 via-green-200 to-green-300';

  const iconBg = isYellow 
    ? 'bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm' 
    : 'bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm';
    
  const categoryBg = isYellow 
    ? 'bg-white/15 backdrop-blur-md border border-white/20' 
    : 'bg-white/15 backdrop-blur-md border border-white/20';

  return (
    <motion.div
      variants={getCardVariants(index)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ 
        y: -12,
        scale: 1.02,
        transition: { duration: 0.4, ease: "easeOut" }
      }}
      className="rounded-3xl p-0.5 relative group overflow-hidden cursor-pointer"
      style={cardStyle}
    >
      {/* Sleek Border Glow */}
      <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${borderGradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-sm`}></div>
      
      {/* Glass morphism overlay */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 via-transparent to-black/10 opacity-60"></div>
      
      <div className="relative z-10 p-8 h-full flex flex-col justify-between rounded-3xl min-h-[280px]">
        <div>
          {/* Category badge with glass effect */}
          <div className={`font-semibold text-sm text-white mb-6 tracking-wide px-4 py-2 rounded-xl ${categoryBg} inline-block`}>
            {category}
          </div>
          <h3 className="text-3xl font-bold mb-8 text-white leading-tight drop-shadow-sm" dangerouslySetInnerHTML={{ __html: title }} />
        </div>
        
        {/* Sleek icon container */}
        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${iconBg} border border-white/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-400 ease-out`}>
          <ChevronRight className="w-8 h-8 text-white group-hover:translate-x-1 transition-transform duration-300" />
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
          <h2 className="text-4xl md:text-5xl font-bold text-left text-gray-800">
            The Right Solution For You
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