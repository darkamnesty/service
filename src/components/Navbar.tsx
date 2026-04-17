import React, { useState } from 'react';
import { Menu, X, Sparkles, Heart } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-gradient-to-r from-white/95 to-pink-50/95 backdrop-blur-md border-b-2 border-pink-200 shadow-md-soft">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 group cursor-pointer">
            <a href="#" className="text-2xl font-black text-primary-dark flex items-center gap-2 hover:scale-110 transition-transform duration-300">
              <Sparkles size={28} className="animate-bounce-soft text-primary" />
              <div className="flex flex-col">
                <span className="font-fredoka leading-none tracking-[0.5px]">Fushiguro</span>
                <span className="font-satisfy text-[10px] text-pink-500 leading-none mt-1">Services</span>
              </div>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-1 font-nunito">
            {[
              { label: 'Home', href: '#home' },
              { label: 'Services', href: '#services' },
              { label: 'Products', href: '#products' },
              { label: 'Testimonials', href: '#testimonials' },
              { label: 'FAQ', href: '#faq' },
              { label: 'Why Us', href: '#about' },
              { label: 'Contact', href: '#contact' }
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-4 py-2 text-sm text-text-light hover:text-primary-dark font-bold transition-all relative group rounded-xl hover:bg-white/80 tracking-wide"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-main group-hover:w-full transition-all duration-300 rounded-full"></span>
              </a>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <a 
              href="#contact" 
              className="px-5 py-2 bg-gradient-main text-white font-bold text-sm rounded-full hover:shadow-lg-soft hover:scale-105 transition-all duration-300 flex items-center gap-2 group font-nunito tracking-wide"
            >
              <Heart size={16} className="group-hover:fill-white transition-all" />
              Let's Connect
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-text-dark hover:text-primary-dark transition-colors p-2 hover:bg-pink-100 rounded-lg"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-1 animate-fade-in-up bg-gradient-to-b from-white/50 to-pink-50/50">
            {[
              { label: 'Home', href: '#home' },
              { label: 'Services', href: '#services' },
              { label: 'Products', href: '#products' },
              { label: 'Testimonials', href: '#testimonials' },
              { label: 'FAQ', href: '#faq' },
              { label: 'Why Us', href: '#about' },
              { label: 'Contact', href: '#contact' }
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-4 py-2 rounded-xl text-text-light hover:bg-gradient-main hover:text-white font-bold transition-all font-nunito"
              >
                {item.label}
              </a>
            ))}
            <a 
              href="#contact" 
              onClick={() => setIsOpen(false)}
              className="w-full mt-4 px-4 py-2 bg-gradient-main text-white font-bold rounded-xl hover:shadow-lg-soft transition-all flex items-center justify-center gap-2 font-nunito"
            >
              <Heart size={18} />
              Let's Connect
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
