import { useTranslation } from 'react-i18next';
import { Shield, Users, Zap, Link2 } from 'lucide-react';
import { motion } from "framer-motion";

// Animation variants for each card with enhanced effects
const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.15,
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

const ExpertiseSection = () => {
  const expertises = [
    { 
      icon: Shield, 
      title: "Local knowledge", 
      text: "Our specialist team has grassroots knowledge and an acute local understanding of the market-specific intricacies and nuances.",
      gradient: "from-blue-50 to-indigo-100",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      border: "border-blue-200"
    },
    { 
      icon: Users, 
      title: "Hands-on attention", 
      text: "All of our clients are treated with the same level of importance and get personalised, hands-on attention from our team.",
      gradient: "from-emerald-50 to-green-100",
      iconBg: "bg-emerald-100",
      iconColor: "text-emerald-600",
      border: "border-emerald-200"
    },
    { 
      icon: Zap, 
      title: "Speed & flexibility", 
      text: "We can make swift and effective decisions on your behalf, cutting through bureaucracy and guiding you forward.",
      gradient: "from-amber-50 to-yellow-100",
      iconBg: "bg-amber-100",
      iconColor: "text-amber-600",
      border: "border-amber-200"
    },
    { 
      icon: Link2, 
      title: "Lasting commitment", 
      text: "We're in it for the long run. People who'll be helping you are owner-managers, with a stake in our firm and a real interest in your success.",
      gradient: "from-purple-50 to-violet-100",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
      border: "border-purple-200"
    },
  ];

  return (
    <section className="py-8 -mb-4 md:mb-0 md:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 -mb-2 md:mb-0">
        
        {/* Main Heading and Introduction */}
        <div className="text-left mb-8 md:mb-12 max-w-4xl">
          <h2 className="text-3xl mb-6 sm:text-4xl md:text-5xl font-bold text-brand-dark leading-tight">
            Ready to thrive in new
            <span className="text-brand-yellow"> markets?</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
We’re here to guide you every step of the way through our expert team.
Navigating the complexities of regulations, culture, and compliance can be challenging — but with our expertise, you can move forward with confidence. Whether you’re expanding your business or pursuing strategic goals, our deep knowledge and hands-on experience will help you avoid pitfalls, seize opportunities, and achieve success faster.
          </p>
        </div>
        
        {/* Mobile: Enhanced Cards */}
        <div className="block sm:hidden space-y-6">
          {expertises.map((item, index) => (
            <motion.div
              key={index}
              className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${item.gradient} p-6 shadow-lg hover:shadow-xl transition-all duration-300 border ${item.border} group`}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={index}
              whileHover={{ 
                y: -8, 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                <div className={`w-full h-full rounded-full bg-gradient-to-br ${item.gradient} transform translate-x-8 -translate-y-8`}></div>
              </div>
              
              {/* Icon container */}
              <div className={`relative z-10 ${item.iconBg} w-16 h-16 rounded-2xl flex items-center justify-center mb-5 shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                <item.icon className={`w-8 h-8 ${item.iconColor}`} strokeWidth={2} />
              </div>
              
              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-gray-900 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-700 leading-relaxed group-hover:text-gray-800 transition-colors">
                  {item.text}
                </p>
              </div>
              
              {/* Hover accent */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>
        
        {/* Tablet and Desktop: Enhanced Grid */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {expertises.map((item, index) => (
            <motion.div
              key={index}
              className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${item.gradient} p-6 shadow-lg hover:shadow-xl transition-all duration-300 border ${item.border} group cursor-pointer`}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={index}
              whileHover={{ 
                y: -8, 
                scale: 1.03,
                transition: { duration: 0.3 }
              }}
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-24 h-24 opacity-10">
                <div className={`w-full h-full rounded-full bg-gradient-to-br ${item.gradient} transform translate-x-6 -translate-y-6`}></div>
              </div>
              
              {/* Icon container */}
              <div className={`relative z-10 ${item.iconBg} w-14 h-14 rounded-xl flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                <item.icon className={`w-7 h-7 ${item.iconColor}`} strokeWidth={2} />
              </div>
              
              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-lg font-bold text-gray-800 mb-3 group-hover:text-gray-900 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed group-hover:text-gray-800 transition-colors">
                  {item.text}
                </p>
              </div>
              
              {/* Hover accent line */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
              
              {/* Corner accent */}
              <div className="absolute top-0 left-0 w-0 h-0 border-l-[20px] border-t-[20px] border-l-transparent border-t-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;