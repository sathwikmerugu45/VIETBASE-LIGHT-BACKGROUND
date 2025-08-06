import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Plus } from "lucide-react";

// Updated component to render inside a styled container
const ItalicizeCaps: React.FC<{ text: string }> = ({ text }) => {
  const processText = (text: string): (string | JSX.Element)[] => {
    const regex = /\b([A-Z]+)\b/g;
    return text.split(/(\b[A-Z]+\b)/g).map((word, index) =>
      regex.test(word) ? <em key={index} className="not-italic font-semibold text-brand-dark">{word}</em> : word
    );
  };

  return (
    <div className="mt-4 pt-4 border-t border-black/10">
      <p className="text-base text-gray-600 leading-relaxed text-justify hyphens-auto">
        {processText(text)}
      </p>
    </div>
  );
};


const AboutSection = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const sections = [
    {
      title: "History",
      faqs: [
        { question: "From Friendship to Foundership", answer: "It all started four years ago over a cup of chai and a late-night brainstorming session. We were five friends from completely different professional walks of life a sharp industrialist & lawyer with an eye for scalable systems, a chartered accountant who could see numbers in motion, a hands-on engineer turned consultant with a knack for solving business puzzles, a marketing expert who lived and breathed brand psychology, and a tech hacker who could build anything from scratch with sheer logic and code. Our paths crossed over collaborative work and casual debates — but soon we realized we had something powerful in common: a shared hunger to create, solve, and elevate businesses from the inside out." },
        { question: "Where Minds Align, Ideas Thrive", answer: "Our diverse backgrounds became our greatest strength. We were never just talking in silos finance met design, operations spoke to growth, and technology enabled it all. What started as informal collaboration turned into a deep synergy. We weren't just solving business problems; we were challenging paradigms, questioning the 'why,' and building better answers. Our value systems naturally aligned — integrity,impact & innovation became our pillars. We never believed in surface-level fixes; we believed in solving from the core, building from the roots." },
        { question: "From Projects to Purpose", answer: "What began with helping a few startups scale, optimize, and grow soon turned into a full-fledged mission. We saw how most businesses were struggling not because of lack of intent — but lack of integrated thinking. So, we formed this consulting firm — not to be just another advisor, but a TRUE PARTNER IN TRANSFORMATION. We bring not just expertise, but ownership. And our goal remains simple: to make businesses not only succeed — but SUSTAIN, SCALE, and LEAD." },
      ],
    },
    {
      title: "Vision",
      faqs: [
        { question: "What is our vision?", answer: "We envision a business world where companies, regardless of size, can access holistic, world-class consulting that goes beyond theory. A world where strategy, execution, technology, and finance aren't separate compartments, but parts of one unified growth engine. Our vision is to be the driving force behind the next generation of sustainable, high-impact businesses — helping them move from confusion to clarity, from complexity to simplicity, and from stagnation to scale.1." },
        { question: "Co-builders of the journey", answer: "We want to become the most trusted partners — not just as consultants, but as CO-BUILDERS of their journey. Whether it's a startup taking its first step or an enterprise pivoting for future relevance, we aim to be their compass, their catalyst, and their quiet strength behind the scenes." },
        { question: "Create an impact", answer: "Our long-term vision is to build a consulting ecosystem that mentors, accelerates, and empowers — not just clients, but even young talent and future entrepreneurs. We want to be remembered not for the services we offered, but for the IMPACT WE CREATED" },
      ],
    },
    {
      title: "Mission",
      faqs: [
        { question: "We deliver outcomes", answer: "Our mission is to solve business problems with heart, mind, and method — combining strategic thinking, tech innovation, financial wisdom, and actionable marketing intelligence. We don't deliver decks; WE DELIVER OUTCOMES. Every project we take up is an opportunity to create tangible business value, uplift processes, and make our clients stronger than yesterday." },
        { question: "Make future ready", answer: "We aim to simplify complexity. Whether it's a tech roadmap, a go-to-market strategy, an operational bottleneck, or a finance-led growth challenge — we break it down, solve it from the inside, and build systems that scale. Our mission is to make our clients future-ready — with agility, resilience, and clear direction." },
        { question: "Always stand by clients", answer: "And most importantly, we are mission-driven to keep it ethical, personal, and purposeful. We want to be the kind of consultants who don't just impress — but genuinely transform, inspire, and stand by our clients as partners who care." },
      ],
    },
  ];

   const toggleFAQ = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="py-8 md:py-10 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Content - Text Sections */}
          <div className="space-y-8">
            <motion.h1
              className="text-4xl md:text-5xl font-bold leading-tight text-brand-dark"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Discover Our Story<span className="text-brand-yellow">.</span>
            </motion.h1>

            {/* Sticky Tabs */}
            <div className="flex items-start gap-4 sticky top-20 bg-brand-bg/80 backdrop-blur-md z-10 py-0 rounded-xl">
              {sections.map((section, index) => (
                <button
                  key={index}
                  className={`px-4 py-1 md:py-2 border-b-4 transition-colors duration-300 font-semibold text-xl ${
                    activeIndex === index 
                      ? "border-brand-yellow text-brand-dark" 
                      : "border-transparent text-gray-400 hover:text-brand-dark"
                  }`}
                  onClick={() => {
                    setActiveIndex(index);
                    setExpandedIndex(0); // Auto-open the first item of the new tab
                  }}
                >
                  {section.title}
                </button>
              ))}
            </div>

            {/* Accordion styled as cards */}
            <div className="space-y-4">
              {sections[activeIndex].faqs.map((faq, index) => (
                <div key={index} className="bg-brand-green/5 backdrop-blur-lg rounded-2xl border border-white/20 shadow-lg p-6 transition-all duration-300">
                  <div
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() => toggleFAQ(index)}
                  >
                    <p className="text-lg md:text-xl font-bold text-brand-dark">{faq.question}</p>
                    <div className={`w-8 h-8 flex items-center justify-center rounded-full border-2 ${expandedIndex === index ? 'border-brand-yellow' : 'border-brand-dark'} transition-all`}>
                      <Plus size={20} className={`transition-transform duration-300 ${expandedIndex === index ? 'rotate-45 text-brand-yellow' : 'text-brand-dark'}`} />
                    </div>
                  </div>
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
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Image Gallery */}
          <div className="relative lg:sticky top-24">
            <motion.div
              className="gallery w-full h-[70vh] relative overflow-hidden rounded-2xl shadow-2xl"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070" alt="Team meeting" className="absolute inset-0 w-full h-full object-cover"/>
            </motion.div>
            <div className="absolute bottom-6 right-6 flex items-center gap-4">
              <button className="p-3 bg-white/60 backdrop-blur-sm hover:bg-white/90 transition rounded-full shadow-md">
                <ChevronLeft className="w-8 h-8 text-brand-dark" />
              </button>
              <button className="p-3 bg-white/60 backdrop-blur-sm hover:bg-white/90 transition rounded-full shadow-md">
                <ChevronRight className="w-8 h-8 text-brand-dark" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;