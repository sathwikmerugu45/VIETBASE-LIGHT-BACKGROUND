import { useTranslation } from 'react-i18next';
import React from 'react';
import { Linkedin, Facebook, Youtube, Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  const footerSections = [
    {
      title: 'Services',
      links: [
        { name: 'Company Formation', href: '#' },
        { name: 'Business Administration', href: '#' },
        { name: 'Strategic Advisory', href: '#' },
        { name: 'Regulatory Compliance', href: '#' },
        { name: 'Market Entry', href: '#' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '#' },
        { name: 'Our Team', href: '#' },
        { name: 'Contact Us', href: '#' },
        { name: 'Careers', href: '#' },
        { name: 'Partner Network', href: '#' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'News & Insights', href: '#' },
        { name: 'Industry Guides', href: '#' },
        { name: 'Market Reports', href: '#' },
        { name: 'Case Studies', href: '#' },
        { name: 'Regulatory Updates', href: '#' }
      ]
    }
  ];

  return (
    <footer className="bg-[#FDFCF9] text-brand-dark border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-8 lg:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
            
            {/* Company Info - Takes more space on desktop */}
            <div className="lg:col-span-5 space-y-4">
              {/* Logo */}
              <div className="text-brand-dark">
                <div className="font-bold text-2xl lg:text-3xl tracking-wider">VIETBASE</div>
                <div className="text-xs text-brand-green tracking-[0.4em] font-medium">CONSULTING</div>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed max-w-md">
                Your trusted partner for business expansion and regulatory compliance in Vietnam. 
                We provide expert guidance to help you navigate complex markets successfully.
              </p>

              {/* Contact Information */}
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <Phone className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-base">+84 28 3535 8200</div>
                    <div className="text-xs text-gray-500">Ho Chi Minh City Office</div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-sm text-gray-600">Mon – Fri, 8:30 AM - 5:30 PM (UTC+7)</div>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-2">
                <button className="inline-flex items-center space-x-2 border-2 border-brand-yellow text-brand-yellow px-5 py-2.5 rounded-full hover:bg-brand-yellow hover:text-brand-dark font-semibold transition-all duration-300 group text-sm">
                  <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span>Get In Touch</span>
                </button>
              </div>
            </div>

            {/* Navigation Columns */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
                {footerSections.map((section) => (
                  <div key={section.title} className="space-y-3">
                    <h3 className="font-bold text-base text-brand-dark border-b border-brand-green/20 pb-1 inline-block">
                      {section.title}
                    </h3>
                    <ul className="space-y-2">
                      {section.links.map((link) => (
                        <li key={link.name}>
                          <a 
                            href={link.href} 
                            className="text-gray-600 hover:text-brand-green transition-colors duration-200 text-sm block"
                          >
                            {link.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 py-4 lg:py-6">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-3 lg:space-y-0">
            
            {/* Copyright */}
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 text-center lg:text-left">
              <p className="text-sm text-gray-500">
                © 2025 VIETBASE CONSULTING CO., LTD. All rights reserved.
              </p>
              <div className="flex space-x-3 text-xs">
                <a href="#" className="text-gray-500 hover:text-brand-green transition-colors">Privacy Policy</a>
                <span className="text-gray-300">|</span>
                <a href="#" className="text-gray-500 hover:text-brand-green transition-colors">Terms of Service</a>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex items-center space-x-1">
              <span className="text-sm text-gray-500 mr-2 hidden sm:inline">Follow us:</span>
              <div className="flex space-x-2">
                <a 
                  href="#" 
                  className="w-9 h-9 bg-brand-green text-white rounded-full flex items-center justify-center hover:bg-brand-green/90 hover:scale-105 transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a 
                  href="#" 
                  className="w-9 h-9 bg-brand-green text-white rounded-full flex items-center justify-center hover:bg-brand-green/90 hover:scale-105 transition-all duration-300"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a 
                  href="#" 
                  className="w-9 h-9 bg-brand-green text-white rounded-full flex items-center justify-center hover:bg-brand-green/90 hover:scale-105 transition-all duration-300"
                  aria-label="YouTube"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;