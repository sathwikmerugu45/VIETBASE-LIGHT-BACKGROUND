import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="text-brand-dark pt-24 md:pt-32 pb-0 lg:pt-0 lg:min-h-screen lg:flex lg:items-center overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Content */}
        <motion.div 
          className="space-y-8 lg:space-y-10 order-2 lg:order-1 text-center lg:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
         <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-brand-dark">
            <div>Ready to build</div>
            <div>your business</div>
            <div className="text-brand-yellow">
              <span className="text-[0.9em]">in</span> Vietnam?
            </div>
          </h1>

          {/* Creator Info */}
          <div className="flex items-center space-x-4 mt-6 md:mt-8 justify-center lg:justify-start">
            <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
              <img 
                src="https://clavistraconsultants.com/image2.jpg" 
                alt="VIETBASE Founder" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-sm md:text-lg text-gray-600">
                Bridging foreign ambition with<br className="hidden sm:block" />
                local execution for success.
              </p>
              <p className="text-gray-500 mt-1 text-sm">— KG</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-4 justify-center lg:justify-start">
            <button className="bg-brand-yellow text-brand-dark px-8 py-3 rounded-full font-semibold hover:bg-opacity-80 transition-colors text-base">
              Explore Services
            </button>
            <button className="bg-transparent border-2 border-brand-dark text-brand-dark px-8 py-3 rounded-full hover:bg-brand-dark hover:text-white transition-all text-base">
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
          <div className="rounded-3xl overflow-hidden max-w-md mx-auto lg:max-w-none shadow-2xl">
            <img 
              src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Business consulting in Vietnam" 
              className="w-full h-[350px] lg:h-[500px] object-cover"
            />
          </div> 
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;