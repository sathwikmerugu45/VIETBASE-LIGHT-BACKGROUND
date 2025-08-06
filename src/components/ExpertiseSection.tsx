import { Shield, Users, Zap, Link2 } from 'lucide-react';
import { motion } from "framer-motion";

// Animation variants for each column to appear sequentially
const columnVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const ExpertiseSection = () => {
  // Updated data to match the new design and content from the reference image
  const expertises = [
    { 
      icon: Shield, 
      title: "Local knowledge", 
      text: "Our specialist team has grassroots knowledge and an acute local understanding of the market-specific intricacies and nuances." 
    },
    { 
      icon: Users, 
      title: "Hands-on attention", 
      text: "All of our clients are treated with the same level of importance and get personalised, hands-on attention from our team." 
    },
    { 
      icon: Zap, 
      title: "Speed & flexibility", 
      text: "We can make swift and effective decisions on your behalf, cutting through bureaucracy and guiding you forward." 
    },
    { 
      icon: Link2, 
      title: "Lasting commitment", 
      text: "We're in it for the long run. People who'll be helping you are owner-managers, with a stake in our firm and a real interest in your success." 
    },
  ];

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Main Heading and Introduction */}
        <div className="text-left mb-16 md:mb-20 max-w-4xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-dark leading-tight">
            If you want to succeed in new markets, 
            you will need an <span className="text-brand-yellow">expert.</span>
          </h2>
          <p className="text-lg text-gray-600 mt-6 leading-relaxed">
            We know how to navigate the complexities and challenges of regulatory environments to ensure your operations are fully compliant and seamless. Whether it is business expansion or other strategic goals, our years of experience and in-depth knowledge will help you avoid pitfalls and achieve success faster.
          </p>
        </div>
        
        {/* New 4-Column Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {expertises.map((item, index) => (
            <motion.div
              key={index}
              className="text-left"
              variants={columnVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={index}
            >
              <item.icon className="w-12 h-12 text-brand-green mb-5" strokeWidth={1.5} />
              <h3 className="text-xl font-bold text-brand-dark mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
 {/* Tax Guide Resource */}
        <div className="bg-white/50 backdrop-blur-md rounded-3xl p-6 sm:p-8 mt-20 relative overflow-hidden max-w-5xl mx-auto border border-white/50 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <motion.div 
              className="bg-white rounded-2xl p-4 w-full max-w-xs mx-auto lg:mx-0 shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-full h-40 bg-gradient-to-br from-brand-green to-brand-yellow rounded-xl mb-3 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute bottom-3 left-3 text-white">
                  <div className="text-xl font-bold">Vietnam tax</div>
                  <div className="text-md">guide</div>
                </div>
              </div>
            </motion.div>
            
            <div className="space-y-4 text-center lg:text-left">
              <div className="text-brand-yellow text-sm font-medium">Free resource</div>
              <h3 className="text-2xl sm:text-3xl font-bold leading-snug text-brand-dark">
                Taxation in Vietnam: Complete<br />
                guide (2025)<span className="text-brand-yellow">.</span>
              </h3>
              <p className="text-base text-gray-600">
                A comprehensive guide covering taxation in Vietnam for both corporate and individual taxpayers.
              </p>
              <button className="bg-brand-yellow text-brand-dark px-5 py-2 text-sm sm:text-base rounded-full font-semibold hover:bg-opacity-80 transition-colors">
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

//  {/* Tax Guide Resource */}
//         <div className="bg-white/50 backdrop-blur-md rounded-3xl p-6 sm:p-8 mt-20 relative overflow-hidden max-w-5xl mx-auto border border-white/50 shadow-xl">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
//             <motion.div 
//               className="bg-white rounded-2xl p-4 w-full max-w-xs mx-auto lg:mx-0 shadow-lg"
//               initial={{ opacity: 0, scale: 0.9 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5 }}
//             >
//               <div className="w-full h-40 bg-gradient-to-br from-brand-green to-brand-yellow rounded-xl mb-3 relative overflow-hidden">
//                 <div className="absolute inset-0 bg-black/20"></div>
//                 <div className="absolute bottom-3 left-3 text-white">
//                   <div className="text-xl font-bold">Vietnam tax</div>
//                   <div className="text-md">guide</div>
//                 </div>
//               </div>
//             </motion.div>
            
//             <div className="space-y-4 text-center lg:text-left">
//               <div className="text-brand-yellow text-sm font-medium">Free resource</div>
//               <h3 className="text-2xl sm:text-3xl font-bold leading-snug text-brand-dark">
//                 Taxation in Vietnam: Complete<br />
//                 guide (2025)<span className="text-brand-yellow">.</span>
//               </h3>
//               <p className="text-base text-gray-600">
//                 A comprehensive guide covering taxation in Vietnam for both corporate and individual taxpayers.
//               </p>
//               <button className="bg-brand-yellow text-brand-dark px-5 py-2 text-sm sm:text-base rounded-full font-semibold hover:bg-opacity-80 transition-colors">
//                 Download
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>