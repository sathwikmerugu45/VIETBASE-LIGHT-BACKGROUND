import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="text-brand-dark pt-20 md:pt-20 lg:pt-32 pb-16 md:pb-0 lg:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left Content */}
        <motion.div 
          className="space-y-6 lg:space-y-8 order-2 lg:order-1 text-center lg:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold leading-tight text-brand-dark">
            {/* Mobile: 2-line version */}
            <div className="lg:hidden">
              <div className="leading-tight">Ready to build your business</div>
              <div className="text-brand-yellow leading-tight">in Vietnam?</div>
            </div>
            
            {/* Desktop: 3-line version */}
            <div className="hidden lg:block">
              <div className="leading-tight">Ready to build</div>
              <div className="leading-tight">your business</div>
              <div className="text-brand-yellow leading-tight">in Vietnam?</div>
            </div>
          </h1>

          {/* Creator Info */}
          <div className="flex items-center space-x-4 mt-4 md:mt-6 justify-center lg:justify-start">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden flex-shrink-0">
              <img 
                src="https://clavistraconsultants.com/image2.jpg" 
                alt="VIETBASE Founder" 
                className="w-full h-full object-cover"
              />
            </div>
        <div className="text-sm md:text-base text-gray-600">
  <p className="text-center lg:text-left">
    "Bridging foreign ambition with local execution for success,<br className="hidden sm:block" />
    driving impactful outcomes through grounded strategies."
  </p>
  <p className="text-xs md:text-sm text-gray-500 text-center lg:text-left mt-1">
    — KG
  </p>
</div>


          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-0 md:pt-0 justify-center lg:justify-start">
            <button className="bg-brand-yellow text-brand-dark px-6 py-2.5 sm:px-8 sm:py-3 rounded-full font-semibold hover:bg-opacity-80 transition-colors text-sm sm:text-base">
              Explore Services
            </button>
            <button className="bg-transparent border-2 border-brand-dark text-brand-dark px-6 py-2.5 sm:px-8 sm:py-3 rounded-full hover:bg-brand-dark hover:text-white transition-all text-sm sm:text-base">
              Schedule Consultation
            </button>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div 
          className="relative order-1 lg:order-2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="rounded-2xl lg:rounded-3xl overflow-hidden max-w-md mx-auto lg:max-w-none shadow-xl lg:shadow-2xl">
            <img 
              src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Business consulting in Vietnam" 
              className="w-full h-[280px] sm:h-[350px] md:h-[400px] lg:h-[500px] object-cover"
            />
          </div> 
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;