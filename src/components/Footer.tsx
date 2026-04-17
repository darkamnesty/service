import React, { useState } from 'react';
import { Heart, Sparkles, MessageCircle, Instagram, Zap } from 'lucide-react';
import CustomAlert from './CustomAlert';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const handleJoinServer = () => {
    setAlertMessage('✨ The Fushiguro Community is almost ready! ✨\n\nWe are currently polishing the server for the best experience. DM us for an exclusive early invite!');
    setShowAlert(true);
  };

  return (
    <>
      <footer className="relative pt-32 pb-16 px-4 overflow-hidden">
        {/* Top Wave Divider */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] transform rotate-180">
          <svg className="relative block w-[calc(100%+1.3px)] h-[60px]" viewBox="0 0 1200 120" preserveAspectRatio="none" fill="#FDF2F8">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
          </svg>
        </div>

        {/* Vibrant Soft Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-white to-purple-50 -z-20"></div>
        
        {/* Floating Animated Blobs */}
        <div className="absolute inset-0 overflow-hidden -z-10">
          <div className="absolute top-20 right-[10%] w-72 h-72 bg-pink-300 rounded-full blur-[100px] opacity-20 animate-float"></div>
          <div className="absolute bottom-10 left-[5%] w-80 h-80 bg-purple-300 rounded-full blur-[100px] opacity-20 animate-bounce-soft"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-yellow-200 rounded-full blur-[100px] opacity-10 animate-float" style={{"animationDelay": "2s"}}></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Top Section - Brand + Stats */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16 pb-12 border-b-2 border-pink-100">
            {/* Brand Info */}
            <div className="group flex flex-col items-center md:items-start text-center md:text-left">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-gradient-to-br from-pink-500 to-purple-500 rounded-[24px] group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-pink-200/50">
                  <Sparkles size={32} className="text-white animate-bounce-soft" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-[#2D2342] font-fredoka">
                    Fushiguro
                  </h3>
                  <p className="text-xs font-satisfy text-purple-500">Premium Discord Services</p>
                </div>
              </div>
              <p className="text-[#2D2342]/70 font-nunito leading-relaxed text-sm max-w-xs">
                Crafting the most premium Discord experiences with cutting-edge technology, stunning design, and unmatched support.
              </p>
              <div className="flex gap-4 mt-8">
                <a href="https://discord.com/users/fushiguro_toji" target="_blank" rel="noopener noreferrer" className="p-4 bg-white border-2 border-pink-200 rounded-full hover:bg-pink-500 hover:text-white transition-all duration-500 shadow-sm transform hover:scale-110 hover:-translate-y-1">
                  <MessageCircle size={20} className="text-pink-500 hover:text-white" />
                </a>
                <a href="https://instagram.com/fushiguro.services" target="_blank" rel="noopener noreferrer" className="p-4 bg-white border-2 border-purple-200 rounded-full hover:bg-purple-500 hover:text-white transition-all duration-500 shadow-sm transform hover:scale-110 hover:-translate-y-1">
                  <Instagram size={20} className="text-purple-500 hover:text-white" />
                </a>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="flex flex-col justify-center">
              <div className="grid grid-cols-3 gap-6">
                <div className="p-6 bg-white rounded-[24px] shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all transform hover:-translate-y-2 text-center group">
                  <div className="text-3xl font-bold text-pink-500 font-fredoka">500+</div>
                  <p className="text-xs text-[#2D2342] font-nunito font-bold mt-1">Servers</p>
                </div>
                <div className="p-6 bg-white rounded-[24px] shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all transform hover:-translate-y-2 text-center group">
                  <div className="text-3xl font-bold text-purple-500 font-fredoka">99.9%</div>
                  <p className="text-xs text-[#2D2342] font-nunito font-bold mt-1">Uptime</p>
                </div>
                <div className="p-6 bg-white rounded-[24px] shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all transform hover:-translate-y-2 text-center group">
                  <div className="text-3xl font-bold text-yellow-500 font-fredoka">24/7</div>
                  <p className="text-xs text-[#2D2342] font-nunito font-bold mt-1">Support</p>
                </div>
              </div>
            </div>
          </div>

          {/* Main Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
            {/* Navigation */}
            <div>
              <h4 className="text-base font-bold text-[#2D2342] mb-6 font-fredoka flex items-center gap-2">
                <Zap size={18} className="text-pink-500" />
                Navigation
              </h4>
              <ul className="space-y-3">
                {[
                  { label: 'Home', href: '#home' },
                  { label: 'Services', href: '#services' },
                  { label: 'Products', href: '#products' },
                  { label: 'Testimonials', href: '#testimonials' },
                  { label: 'Why Us', href: '#about' },
                  { label: 'Contact', href: '#contact' },
                ].map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[#2D2342]/70 hover:text-pink-500 font-nunito font-medium text-sm transition-all duration-300 flex items-center gap-2 group"
                    >
                      <span className="text-pink-400 opacity-0 group-hover:opacity-100 transition-opacity">✨</span>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-base font-bold text-[#2D2342] mb-6 font-fredoka flex items-center gap-2">
                <Heart size={18} className="text-purple-500" />
                Services
              </h4>
              <ul className="space-y-3">
                {[
                  'Server Management',
                  'Server Moderation',
                  'Custom Bots',
                ].map((service) => (
                  <li key={service}>
                    <a href="#services" className="text-[#2D2342]/70 hover:text-purple-500 font-nunito font-medium text-sm transition-all duration-300">
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h4 className="text-base font-bold text-[#2D2342] mb-6 font-fredoka flex items-center gap-2">
                <Sparkles size={18} className="text-yellow-500" />
                Connect
              </h4>
              <ul className="space-y-3">
                <li>
                  <a href="https://discord.com/users/fushiguro_toji" target="_blank" rel="noopener noreferrer" className="text-[#2D2342]/70 hover:text-pink-500 font-nunito font-medium text-sm transition-all duration-300">
                    Discord
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com/fushiguro.services" target="_blank" rel="noopener noreferrer" className="text-[#2D2342]/70 hover:text-purple-500 font-nunito font-medium text-sm transition-all duration-300">
                    Instagram
                  </a>
                </li>
                <li>
                  <button 
                    onClick={handleJoinServer} 
                    className="px-4 py-2 bg-pink-50 text-pink-600 font-nunito font-bold text-xs rounded-full border border-pink-200 hover:bg-pink-500 hover:text-white transition-all duration-300 shadow-sm"
                  >
                    🚀 Join Community
                  </button>
                </li>
              </ul>
            </div>

            {/* Redesigned Newsletter/Call to action */}
            <div className="col-span-2 md:col-span-1">
              <h4 className="text-base font-bold text-[#2D2342] mb-4 font-fredoka">Ready to start?</h4>
              <p className="text-xs text-[#2D2342]/70 font-bold mb-4 font-nunito leading-relaxed">
                Transform your Discord experience today with our expert team.
              </p>
              <a 
                href="#contact" 
                className="inline-block w-full py-3 bg-gradient-main text-white text-center font-bold rounded-[20px] shadow-lg shadow-pink-200/50 hover:scale-105 transition-transform duration-300 font-nunito text-sm"
              >
                Contact Us Now
              </a>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t-2 border-pink-100 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-[#2D2342]/60 font-nunito text-xs font-medium">
              © {currentYear} Fushiguro. Crafted with <Heart size={14} className="inline text-pink-500 fill-pink-500 mx-1" /> and magic ✨
            </p>
            <div className="flex items-center gap-3 text-[#2D2342]/60 font-nunito text-xs">
              <span className="text-purple-500 font-bold">Status:</span>
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span>Online & Ready</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Global Style Injector for Custom Cursor and Scroll Animations */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@600&family=Nunito:wght@500;700&display=swap');

        :root {
          --deep-plum: #2D2342;
          --pastel-purple: #a855f7;
          --millennial-pink: #ec4899;
        }

        html, body {
          font-family: 'Nunito', sans-serif;
          font-weight: 500;
          color: var(--deep-plum);
          line-height: 1.7;
          scroll-behavior: smooth;
        }

        /* Enable smooth pausing for animated sections */
        .pause-animation {
          animation-play-state: paused !important;
        }

        /* Background Sparkle Layer */
        body::before {
          content: "";
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: radial-gradient(circle, #ec4899 1px, transparent 1px);
          background-size: 100px 100px;
          opacity: 0.05;
          pointer-events: none;
          animation: sparkleShift 60s linear infinite;
          z-index: -1;
        }

        @keyframes sparkleShift {
          from { background-position: 0 0; }
          to { background-position: 1000px 1000px; }
        }

        h1, h2, h3, h4, .font-fredoka {
          font-family: 'Fredoka', sans-serif !important;
          font-weight: 600 !important;
          letter-spacing: 0.5px !important;
        }

        .font-nunito {
          font-family: 'Nunito', sans-serif !important;
        }

        /* Custom Cute Cursor */
        html, body {
          cursor: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='%23ec4899' stroke='%23ffffff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'%3E%3C/path%3E%3C/svg%3E") 12 12, auto;
        }
        
        a, button, [role="button"] {
          cursor: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='28' viewBox='0 0 24 24' fill='%23a855f7' stroke='%23ffffff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z'%3E%3C/path%3E%3C/svg%3E") 14 14, pointer !important;
        }
        
        /* Custom Scrollbar */
        ::-webkit-scrollbar {
          width: 10px;
        }

        ::-webkit-scrollbar-track {
          background: #ffffff;
          border-radius: 10px;
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #ec4899, #a855f7);
          border-radius: 10px;
          border: 2px solid #ffffff;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #db2777, #9333ea);
        }

        /* GSAP-style Scroll Reveal Variants */
        .scroll-reveal {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 1s cubic-bezier(0.22, 1, 0.36, 1), 
                      transform 1s cubic-bezier(0.22, 1, 0.36, 1);
          will-change: transform, opacity;
        }

        .scroll-reveal.fade-in {
          opacity: 1;
          transform: translateY(0);
        }

        /* Add variants for different directions */
        .reveal-left { transform: translateX(-40px); }
        .reveal-right { transform: translateX(40px); }
        .reveal-zoom { transform: scale(0.9); }
        
        .reveal-left.fade-in, 
        .reveal-right.fade-in { 
          transform: translateX(0); 
        }
        
        .reveal-zoom.fade-in { 
          transform: scale(1); 
        }

        /* Smooth scrolling across the whole document */
        html {
          scroll-behavior: smooth;
        }

        /* Custom selection color */
        ::selection {
          background: rgba(191, 148, 228, 0.3);
          color: #2D2342;
        }
      `}</style>

      {/* Custom Alert Modal */}
      <CustomAlert isOpen={showAlert} message={alertMessage} onClose={() => setShowAlert(false)} />
    </>
  );
}
