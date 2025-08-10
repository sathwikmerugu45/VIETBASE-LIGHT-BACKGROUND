import { useTranslation } from 'react-i18next';
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Plus } from "lucide-react";

const ItalicizeCaps: React.FC<{ text: string }> = ({ text }) => {
    // This component remains the same as it's for styling, not translation.
    const processText = (text: string): (string | JSX.Element)[] => {
      const regex = /\b([A-Z]+)\b/g;
      return text.split(/(\b[A-Z]+\b)/g).map((word, index) =>
        regex.test(word) ? <em key={index} className="not-italic font-semibold text-brand-dark">{word}</em> : word
      );
    };
  
    return (
      <div className="mt-3 pt-3 md:mt-4 md:pt-4 border-t border-black/10">
        <p className="text-sm md:text-base text-gray-600 leading-relaxed text-justify hyphens-auto">
          {processText(text)}
        </p>
      </div>
    );
  };

const AboutSection = () => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const sections = [
    {
      title: t('tab_history'),
      faqs: [
        { question: t('history_q1'), answer: t('history_a1') },
        { question: t('history_q2'), answer: t('history_a2') },
        { question: t('history_q3'), answer: t('history_a3') },
      ],
    },
    {
      title: t('tab_vision'),
      faqs: [
        { question: t('vision_q1'), answer: t('vision_a1') },
        { question: t('vision_q2'), answer: t('vision_a2') },
        { question: t('vision_q3'), answer: t('vision_a3') },
      ],
    },
    {
      title: t('tab_mission'),
      faqs: [
        { question: t('mission_q1'), answer: t('mission_a1') },
        { question: t('mission_q2'), answer: t('mission_a2') },
        { question: t('mission_q3'), answer: t('mission_a3') },
      ],
    },
  ];

   const toggleFAQ = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const handleTabChange = (index: number) => {
    setActiveIndex(index);
    setExpandedIndex(0);
  };

  return (
    <section className="py-2 md:py-10 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-16 items-start">
          
          <div className="space-y-4 md:space-y-8">
            <motion.h1
              className="text-3xl md:text-5xl font-bold leading-tight text-brand-dark"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {t('about_section_title')}<span className="text-brand-yellow"></span>
            </motion.h1>

            <div className="flex items-start gap-2 md:gap-4 sticky top-20 z-10 py-0">
              {sections.map((section, index) => (
                <motion.button
                  key={index}
                  className={`px-2 md:px-4 py-1 md:py-2 border-b-4 transition-all duration-500 font-semibold text-lg md:text-xl relative ${
                    activeIndex === index 
                      ? "border-brand-yellow text-brand-dark" 
                      : "border-transparent text-gray-400 hover:text-brand-dark"
                  }`}
                  onClick={() => handleTabChange(index)}
                >
                  {section.title}
                </motion.button>
              ))}
            </div>
            
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeIndex}
                className="space-y-3 md:space-y-4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                {sections[activeIndex].faqs.map((faq, index) => (
                  <motion.div 
                    key={index} 
                    className="bg-brand-green/5 backdrop-blur-lg rounded-2xl border border-white/20 shadow-lg p-4 md:p-6 transition-all duration-300"
                  >
                    <div
                      className="flex justify-between items-center cursor-pointer"
                      onClick={() => toggleFAQ(index)}
                    >
                      <p className="text-base md:text-xl font-bold text-brand-dark pr-2">{faq.question}</p>
                      <motion.div className={`w-6 h-6 md:w-8 md:h-8 flex items-center justify-center rounded-full border-2 flex-shrink-0 ${expandedIndex === index ? 'border-brand-yellow' : 'border-brand-dark'} transition-all`}>
                        <motion.div animate={{ rotate: expandedIndex === index ? 45 : 0 }} transition={{ duration: 0.3 }}>
                          <Plus size={16} className={`md:w-5 md:h-5 ${expandedIndex === index ? 'text-brand-yellow' : 'text-brand-dark'}`} />
                        </motion.div>
                      </motion.div>
                    </div>
                    <AnimatePresence>
                      {expandedIndex === index && (
                         <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.4, ease: "easeInOut" }}
                        >
                          <ItalicizeCaps text={faq.answer} />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="relative lg:sticky top-24">
            <motion.div
              className="gallery w-full h-[50vh] md:h-[70vh] relative overflow-hidden rounded-2xl shadow-2xl"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070" alt="Team meeting" className="absolute inset-0 w-full h-full object-cover"/>
            </motion.div>
            <div className="absolute bottom-4 md:bottom-6 right-4 md:right-6 flex items-center gap-2 md:gap-4">
              <button className="p-2 md:p-3 bg-white/60 backdrop-blur-sm hover:bg-white/90 transition rounded-full shadow-md">
                <ChevronLeft className="w-6 h-6 md:w-8 md:h-8 text-brand-dark" />
              </button>
              <button className="p-2 md:p-3 bg-white/60 backdrop-blur-sm hover:bg-white/90 transition rounded-full shadow-md">
                <ChevronRight className="w-6 h-6 md:w-8 md:h-8 text-brand-dark" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;