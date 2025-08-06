import React from 'react';
import { Linkedin, Facebook, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#FDFCF9] text-brand-dark py-16 border-t border-black/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Logo and Contact */}
          <div className="lg:col-span-2 space-y-6">
            <div className="text-brand-dark">
              <div className="font-bold text-2xl tracking-wider">VIETBASE</div>
               <div className="text-xs text-brand-green tracking-[0.4em]">CONSULTING</div>
            </div>
            <div className="space-y-4">
              <div>
                <div className="font-semibold text-lg">+84 28 3535 8200 (HCMC)</div>
                <div className="text-sm text-gray-500">We are open Monday – Friday:</div>
                <div className="text-sm text-gray-500">8.30 am to 5.30 pm (UTC+7)</div>
              </div>
              <button className="border-2 border-brand-yellow text-brand-yellow px-6 py-2 rounded-full hover:bg-brand-yellow hover:text-brand-dark font-semibold transition-all">
                Email us
              </button>
            </div>
          </div>

          {/* Columns */}
          {['Services', 'Company', 'Resources'].map(title => (
            <div className="space-y-4" key={title}>
              <h3 className="font-bold text-lg">{title}</h3>
              <ul className="space-y-2 text-sm text-gray-500">
                {title === 'Services' && ['Formation', 'Administration', 'Advisory'].map(item => <li key={item}><a href="#" className="hover:text-brand-yellow transition-colors">{item}</a></li>)}
                {title === 'Company' && ['About us', 'Contact us', 'Careers'].map(item => <li key={item}><a href="#" className="hover:text-brand-yellow transition-colors">{item}</a></li>)}
                {title === 'Resources' && ['News & Insights', 'Guides', 'Industry reports'].map(item => <li key={item}><a href="#" className="hover:text-brand-yellow transition-colors">{item}</a></li>)}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Media */}
        <div className="flex flex-col sm:flex-row justify-between items-center mt-12 pt-8 border-t border-black/5">
          <p className="text-sm text-gray-500 mb-4 sm:mb-0">© 2025 VIETBASE CONSULTING CO. All rights reserved.</p>
          <div className="flex justify-center md:justify-end space-x-4">
            <a href="#" className="w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center hover:bg-opacity-80 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center hover:bg-opacity-80 transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center hover:bg-opacity-80 transition-colors">
              <Youtube className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;