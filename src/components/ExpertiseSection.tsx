import { useTranslation } from 'react-i18next';
import { Shield, Users, Zap, Link2 } from 'lucide-react';
import { motion } from "framer-motion";

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
  const { t } = useTranslation();

  const expertises = [
    { 
      icon: Shield, 
      title: t('expertise_knowledge_title'), 
      text: t('expertise_knowledge_text'),
      gradient: "from-blue-50 to-indigo-100",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      border: "border-blue-200"
    },
    { 
      icon: Users, 
      title: t('expertise_attention_title'), 
      text: t('expertise_attention_text'),
      gradient: "from-emerald-50 to-green-100",
      iconBg: "bg-emerald-100",
      iconColor: "text-emerald-600",
      border: "border-emerald-200"
    },
    { 
      icon: Zap, 
      title: t('expertise_speed_title'), 
      text: t('expertise_speed_text'),
      gradient: "from-amber-50 to-yellow-100",
      iconBg: "bg-amber-100",
      iconColor: "text-amber-600",
      border: "border-amber-200"
    },
    { 
      icon: Link2, 
      title: t('expertise_commitment_title'), 
      text: t('expertise_commitment_text'),
      gradient: "from-purple-50 to-violet-100",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
      border: "border-purple-200"
    },
  ];

  return (
    <section className="py-8 -mb-4 md:mb-0 md:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 -mb-2 md:mb-0">
        
        <div className="text-left mb-8 md:mb-12 max-w-4xl">
          <h2 className="text-3xl mb-6 sm:text-4xl md:text-5xl font-bold text-brand-dark leading-tight">
            {t('expertise_section_title')}
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            {t('expertise_section_subtitle')}
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
            >
              <div className={`relative z-10 ${item.iconBg} w-16 h-16 rounded-2xl flex items-center justify-center mb-5 shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                <item.icon className={`w-8 h-8 ${item.iconColor}`} strokeWidth={2} />
              </div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-gray-900 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-700 leading-relaxed group-hover:text-gray-800 transition-colors">
                  {item.text}
                </p>
              </div>
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
            >
              <div className={`relative z-10 ${item.iconBg} w-14 h-14 rounded-xl flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                <item.icon className={`w-7 h-7 ${item.iconColor}`} strokeWidth={2} />
              </div>
              <div className="relative z-10">
                <h3 className="text-lg font-bold text-gray-800 mb-3 group-hover:text-gray-900 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed group-hover:text-gray-800 transition-colors">
                  {item.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;