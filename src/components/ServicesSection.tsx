import React from 'react';
import { useTranslation } from 'react-i18next';
import { Rocket, Settings, Briefcase, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const servicesData = [
  {
    icon: Rocket,
    label: "Getting started",
    title: "Formation",
    color: "yellow", // This will apply the yellow theme
    items: [
      "Company registration",
      "Licensing & structuring support",
    ]
  },
  {
    icon: Settings,
    label: "Staying compliant",
    title: "Administration",
    color: "yellow", // This will correctly apply the green theme
    items: [
      "Corporate secretarial",
      "Accounting & tax compliance",
      "Payroll outsourcing",
      "PEO/Employer of record",
      "HR administration",
      "Work permit"
    ]
  },
  {
    icon: Briefcase,
    label: "Streamlining operations",
    title: "Advisory",
    color: "yellow", // This will apply the yellow theme
    items: [
      "Business consulting",
      "Tax advisory & planning",
    ]
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1]
    }
  })
};

const ServiceCard = ({ icon: Icon, label, title, color, items, index }: any) => {
  const isYellow = color === 'yellow';
  const iconBg = isYellow ? 'bg-gradient-to-br from-yellow-400 to-amber-500' : 'bg-gradient-to-br from-green-400 to-emerald-500';
  const titleColor = isYellow ? 'text-brand-yellow' : 'text-brand-green';
  const bulletColor = isYellow ? 'bg-brand-yellow' : 'bg-brand-green';
  const buttonBorder = isYellow ? 'border-brand-yellow' : 'border-brand-green';
  const buttonHoverBg = isYellow ? 'hover:bg-brand-yellow' : 'hover:bg-brand-green';
  
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      custom={index}
      className="bg-gradient-to-b from-gray-800 to-brand-dark rounded-3xl p-8 flex flex-col h-full shadow-2xl hover:shadow-brand-dark/40 transition-shadow duration-400"
    >
      {/* Icon */}
      <div className={`w-20 h-20 mb-8 rounded-2xl flex items-center justify-center ${iconBg}`}>
        <Icon className="w-10 h-10 text-white" />
      </div>

      {/* Heading */}
      <div className="mb-0 md:mb-6 text-left">
        <div className="text-sm text-gray-400 mb-2 uppercase tracking-wider">{label}</div>
        <h3 className={`text-3xl font-bold mb-4 ${titleColor}`}>{title}<span className="text-gray-500"></span></h3>
      </div>

      {/* Bullet Points */}
      <div className="space-y-4 text-left mb-8 flex-grow">
        {items.map((text: string, idx: number) => (
          <div className="flex items-start space-x-4" key={idx}>
            <div className={`w-2.5 h-2.5 mt-1.5 ${bulletColor} rounded-full flex-shrink-0`}></div>
            <span className="text-gray-300 hover:text-white cursor-pointer transition-colors">{text}</span>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="mt-auto flex justify-start">
        <button className={`border-2 ${buttonBorder} ${titleColor} px-6 py-2 rounded-full ${buttonHoverBg} hover:text-brand-dark font-semibold transition-all group flex items-center gap-2`}>
          View all services
          <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </motion.div>
  );
};

const ServicesSection = () => {
  return (
    <section className="py-4 md:py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 md:mb-16 text-center">
          <div className="text-brand-yellow font-semibold text-lg md:text-xl mb-0 md:mb-4 tracking-wider">
  ● OUR SERVICES ● 
</div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight text-brand-dark">
            Corporate Services For Every<br className="hidden sm:block" />
            Part of Your <span className="text-brand-dark">Journey</span><span className="text-brand-yellow"></span>
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto -mb-4 leading-relaxed">
            Find intelligent answers to the most complex administrative issues you'll come up against as your business expands into Vietnam and beyond. Ask us for solutions, not just advice.
          </p>
        </div>

        {/* Service Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {servicesData.map((service, index) => (
            <ServiceCard key={service.title} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;