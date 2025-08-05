import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Plus } from "lucide-react";

interface ItalicizeCapsProps {
  text: string;
}

const ItalicizeCaps: React.FC<ItalicizeCapsProps> = ({ text }) => {
  const processText = (text: string): (string | JSX.Element)[] => {
    const regex = /\b([A-Z]+)\b/g;
    return text.split(/(\b[A-Z]+\b)/g).map((word, index) =>
      regex.test(word) ? <em key={index}>{word}</em> : word
    );
  };

  return (
    <p className="mt-2 text-lg text-gray-600 leading-relaxed text-justify hyphens-auto">
      {processText(text)}
    </p>
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
    <section className="bg-white text-gray-800 py-16 md:py-20 lg:py-8 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content - Text Sections */}
          <div className="space-y-8">
            <motion.h1
              className="text-4xl md:text-5xl font-bold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {"Discover Our Story".split("").map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.5 }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.h1>

            <div className="flex items-start gap-4 mb-4 sticky top-0 bg-white z-10 pt-4">
              {sections.map((section, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 border-b-2 ${
                    activeIndex === index 
                      ? "border-yellow-500 text-2xl font-semibold text-yellow-500" 
                      : "border-gray-300 text-2xl font-semibold text-gray-500"
                  }`}
                  onClick={() => {
                    setActiveIndex(index);
                    setExpandedIndex(index === 0 ? 0 : null);
                  }}
                >
                  {section.title}
                </button>
              ))}
            </div>

            <div className="space-y-6">
              {sections[activeIndex].faqs.map((faq, index) => (
                <div key={index} className="mb-6">
                  <div
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() => toggleFAQ(index)}
                  >
                    <p className="text-xl md:text-2xl font-medium text-gray-700">{faq.question}</p>
                    <Plus size={20} className={`transition-transform border-2 rounded text-yellow-500 ${expandedIndex === index ? 'rotate-45' : ''}`} />
                  </div>
                  {expandedIndex === index && (
                    <ItalicizeCaps text={faq.answer} />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Image Gallery */}
          <div className="relative">
            <motion.div
              className="gallery w-full h-[60vh] relative overflow-hidden rounded-xl"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1516062423079-7ca13cdc7f5a?q=80&w=2083" 
                alt="Create an impact" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1487611459768-bd414656ea10?q=80&w=2070" 
                alt="Always stand by clients" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070" 
                alt="Make future ready" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </motion.div>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-center mt-8 gap-4">
              <button className="p-3 hover:bg-gray-200 transition rounded-full">
                <ChevronLeft className="w-8 h-8 text-yellow-500" />
              </button>
              <button className="p-3 hover:bg-gray-200 transition rounded-full">
                <ChevronRight className="w-8 h-8 text-yellow-500" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;