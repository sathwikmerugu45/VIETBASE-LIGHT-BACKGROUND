import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, X, Calendar } from 'lucide-react';

const BookCallButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleBookCall = () => {
    alert('Redirecting to booking system...');
  };

  const handleScheduleConsultation = () => {
    alert('Redirecting to consultation scheduling...');
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 text-sm font-medium max-w-[90vw]">
      {/* Animate open/close box */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="mb-3 bg-white/90 backdrop-blur-md border border-gray-200 shadow-xl rounded-xl p-4 w-[90vw] max-w-[300px]"
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-gray-800 font-semibold">Let’s Connect</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={18} />
              </button>
            </div>

            <div className="space-y-3">
              <motion.button
                whileTap={{ scale: 0.97 }}
                onClick={handleBookCall}
                className="w-full flex items-center gap-2 p-2.5 rounded-md bg-brand-green text-white hover:bg-brand-green/90 transition"
              >
                <Phone size={16} />
                Book a Call
              </motion.button>

              <motion.button
                whileTap={{ scale: 0.97 }}
                onClick={handleScheduleConsultation}
                className="w-full flex items-center gap-2 p-2.5 rounded-md border border-brand-green text-brand-green hover:bg-brand-green/10 transition"
              >
                <Calendar size={16} />
                Schedule Consultation
              </motion.button>
            </div>

            <p className="text-xs text-gray-600 mt-3 leading-snug">
              Ready to build your business in Vietnam? Let’s discuss your goals.
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`relative flex items-center gap-2 px-4 py-2.5 rounded-full text-white bg-brand-green hover:bg-brand-green/90 shadow-lg transition`}
      >
        <motion.span
          className="absolute top-0 left-0 w-full h-full rounded-full"
          animate={{ scale: [1, 1.05, 1], opacity: [0.8, 0.4, 0.8] }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: 'easeInOut',
          }}
          style={{
            zIndex: -1,
            backgroundColor: 'rgba(34,197,94,0.3)', // brand-green translucent
            filter: 'blur(6px)',
          }}
        />
        {isOpen ? <X size={18} /> : <Phone size={18} />}
        <span>Book A Call</span>
      </motion.button>
    </div>
  );
};

export default BookCallButton;
