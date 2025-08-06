import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="text-brand-dark pt-20 md:pt-0 md:min-h-screen md:flex md:items-center overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center">
        {/* Left Content */}
        <motion.div 
          className="space-y-8 lg:space-y-10 order-2 lg:order-1"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
         <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-center lg:text-left text-brand-dark">
            <div>Ready to build</div>
            <div>your business</div>
            <div className="text-brand-yellow">
              <span className="text-[0.9em]">in</span> Vietnam?
            </div>
          </h1>

          {/* Creator Info */}
          <div className="flex items-center space-x-4 mt-6 md:mt-8">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden flex-shrink-0">
              <img 
                src="https://clavistraconsultants.com/image2.jpg" 
                alt="VIETBASE Founder" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-sm md:text-lg text-gray-600">
                Our mission is to bridge foreign ambition with<br className="hidden md:block" />
                local execution for sustainable success.
              </p>
              <p className="text-gray-500 mt-1 md:mt-2 text-sm md:text-base">— KG</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-4">
            <button className="bg-brand-yellow text-brand-dark px-6 md:px-8 py-3 rounded-full font-semibold hover:bg-opacity-80 transition-colors text-sm md:text-base">
              Explore Services
            </button>
            <button className="bg-transparent border-2 border-brand-dark text-brand-dark px-6 md:px-8 py-3 rounded-full hover:bg-brand-dark hover:text-white transition-all text-sm md:text-base">
              Schedule Consultation
            </button>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div 
          className="relative order-1 lg:order-2 lg:pl-8 xl:pl-12"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="rounded-3xl overflow-hidden max-w-xs mx-auto lg:max-w-md xl:max-w-lg shadow-2xl">
            <img 
              src="https://res.cloudinary.com/canonical/image/fetch/f_auto,q_auto,fl_sanitize,w_2464,h_1027/https%3A%2F%2Fassets.ubuntu.com%2Fv1%2F7f56d2f2-consulting-hero.jpg" 
              alt="Business consulting in Vietnam" 
              className="w-full h-[300px] md:h-[350px] lg:h-[450px] object-cover"
            />
          </div> 
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;