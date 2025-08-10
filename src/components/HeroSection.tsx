import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="text-brand-dark pt-16 sm:pt-20 md:pt-20 lg:pt-32 pb-6 sm:pb-10 md:pb-0 lg:pb-24">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
        {/* Left Content */}
        <motion.div
          className="space-y-4 sm:space-y-6 lg:space-y-8 order-2 lg:order-1 text-center lg:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-brand-dark">
            <div className="lg:hidden">
              <div className="leading-[1.1]">{t('hero_ready_to_build')}</div>
              <div className="text-brand-yellow leading-[1.1]">{t('hero_your_business')} {t('hero_in_vietnam')}</div>
            </div>
            
           <div className="hidden lg:flex flex-col justify-start space-y-[0.0001rem] relative -top-2">
              <div className="leading-tight">{t('hero_ready_to_build')}</div>
              <div className="leading-tight">{t('hero_your_business')}</div>
              <div className="text-brand-yellow leading-tight">{t('hero_in_vietnam')}</div>
            </div>
          </h1>

          <motion.div
            className="mt-4 xs:mt-6 sm:mt-8 md:mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            whileHover={{
              boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
              y: -2
            }}
          >
            <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-3 sm:space-y-0 sm:space-x-4 justify-center lg:justify-start bg-gradient-to-br from-white via-yellow-50 to-white backdrop-blur-sm rounded-xl p-3 xs:p-4 sm:p-5 shadow-lg border border-yellow-200/30 transition-all duration-300">
              <motion.div
                className="w-10 h-10 xs:w-12 xs:h-12 md:w-12 md:h-12 rounded-full overflow-hidden flex-shrink-0 shadow-md"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <img
                  src="https://clavistraconsultants.com/image2.jpg"
                  alt="VIETBASE Founder"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <div className="text-xs xs:text-sm md:text-base text-gray-600 flex-1">
                <p className="relative">
                  {t('hero_quote')}
                  <span className="ml-2 font-bold text-[10px] xs:text-xs md:text-sm text-gray-500 align-middle">
                    {t('hero_kg_initials')}
                  </span>
                </p>
              </div>
            </div>
          </motion.div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 sm:pt-5 justify-center lg:justify-start">
            <motion.button
              className="group relative bg-brand-yellow text-brand-dark px-6 py-3 sm:px-8 sm:py-3.5 rounded-full font-medium text-sm sm:text-base overflow-hidden transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                {t('hero_explore_services')}
              </span>
              <div className="absolute inset-0 bg-brand-dark transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </motion.button>
            <motion.button
              className="group relative bg-transparent border-2 border-brand-dark text-brand-dark px-6 py-3 sm:px-8 sm:py-3.5 rounded-full font-medium text-sm sm:text-base overflow-hidden transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                {t('hero_schedule_consultation')}
              </span>
              <div className="absolute inset-0 bg-brand-dark transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></div>
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          className="relative order-1 lg:order-2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="rounded-2xl lg:rounded-3xl overflow-hidden max-w-sm sm:max-w-md mx-auto lg:max-w-none shadow-xl lg:shadow-2xl">
            <img
              src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Business consulting in Vietnam"
              className="w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;