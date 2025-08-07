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
    <section className="py-8 -mb-4 md:mb-0 md:py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 -mb-2 md:mb-0">
        
        {/* Main Heading and Introduction */}
        <div className="text-left mb-2 md:mb-10 max-w-4xl">
          
          <h2 className="text-3xl mb-6 sm:text-4xl md:text-5xl font-bold text-brand-dark leading-tight">
            If you want to succeed in new markets, 
            you will need an <span className="text-brand-yellow">expert.</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            We know how to navigate the complexities and challenges of regulatory environments to ensure your operations are fully compliant and seamless. Whether it is business expansion or other strategic goals, our years of experience and in-depth knowledge will help you avoid pitfalls and achieve success faster.
          </p>
        </div>
        
        {/* Mobile: Divider lines, Desktop: Clean columns */}
        <div className="block sm:hidden">
          <div className="space-y-0">
            {expertises.map((item, index) => (
              <motion.div
                key={index}
                className="text-left py-4 border-b border-gray-300 last:border-b-0"
                variants={columnVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                custom={index}
              >
                <item.icon className="w-12 h-12 text-brand-green mb-4" strokeWidth={1.5} />
                <h3 className="text-xl font-bold text-brand-dark mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Tablet and Desktop: Grid layout */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-8">
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
              <item.icon className="w-12 h-12 text-brand-green mb-4" strokeWidth={1.5} />
              <h3 className="text-xl font-bold text-brand-dark mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
        
        {/* Alternative: Divider lines for mobile (uncomment if you prefer this approach) */}
        {/* 
        <div className="block lg:hidden">
          <div className="space-y-8">
            {expertises.map((item, index) => (
              <motion.div
                key={index}
                className="text-left pb-8 border-b border-gray-200 last:border-b-0 last:pb-0"
                variants={columnVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                custom={index}
              >
                <item.icon className="w-12 h-12 text-brand-green mb-4" strokeWidth={1.5} />
                <h3 className="text-xl font-bold text-brand-dark mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
        
        <div className="hidden lg:grid lg:grid-cols-4 lg:gap-x-8 lg:gap-y-6">
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
              <item.icon className="w-12 h-12 text-brand-green mb-4" strokeWidth={1.5} />
              <h3 className="text-xl font-bold text-brand-dark mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
        */}
      </div>
    </section>
  );
};

export default ExpertiseSection;