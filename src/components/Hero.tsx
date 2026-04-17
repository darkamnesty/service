import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, Palette, Heart } from 'lucide-react';
import CustomAlert from './CustomAlert';

const AnimatedCounter = ({ end, duration = 2000 }: { end: number; duration?: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration]);

  return <>{count}</>;
};

export default function Hero() {
  const [uptime, setUptime] = useState(99.9);
  const [showAboutAlert, setShowAboutAlert] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomUptime = (Math.random() * (99.9 - 97.0) + 97.0).toFixed(1);
      setUptime(parseFloat(randomUptime));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="pt-32 pb-16 px-4 relative overflow-hidden scroll-reveal">
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 opacity-20 animate-float">
        <Palette size={80} className="text-purple-400" />
      </div>
      <div className="absolute bottom-20 right-10 opacity-20 animate-float" style={{ animationDelay: '1s' }}>
        <Sparkles size={90} className="text-pink-400" />
      </div>
      <div className="absolute top-1/2 left-1/3 opacity-20 animate-float" style={{ animationDelay: '2s' }}>
        <Heart size={70} className="text-purple-400" />
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pink-100 to-purple-100 border border-pink-200 mb-8 animate-fade-in-up">
          <Sparkles size={18} className="text-primary-dark" />
          <span className="text-xs font-bold text-text-dark font-nunito tracking-wide">Premium Discord Services</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in-up font-fredoka tracking-[0.5px]" style={{ animationDelay: '0.1s' }}>
          <span className="bg-gradient-main bg-clip-text text-transparent">
            Discord Services
          </span>
          <br />
          <span className="text-text-dark">
            Crafted to Perfection
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-text-light max-w-2xl mx-auto mb-10 leading-[1.7] animate-fade-in-up font-nunito" style={{ animationDelay: '0.2s' }}>
          Professional Discord server management, custom bots, and premium support. Transform your community with Fushiguro's elite services.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <a href="#services" className="px-6 py-3 rounded-full bg-gradient-main text-white font-bold text-base shadow-md-soft hover:shadow-lg-soft hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 group font-nunito">
            Explore Services
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <button onClick={() => setShowAboutAlert(true)} className="px-6 py-3 rounded-full bg-white border-2 border-primary text-primary font-bold text-base shadow-sm-soft hover:bg-pink-50 hover:-translate-y-1 transition-all duration-300 font-nunito">
            Learn More
          </button>
        </div>

        {/* Stats Badge */}
        <div className="mt-16 pt-12 border-t border-pink-200 flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16 text-text-light animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <div className="text-center">
            <p className="text-3xl font-bold bg-gradient-alt bg-clip-text text-transparent font-fredoka">
              <AnimatedCounter end={500} duration={2500} />+
            </p>
            <p className="text-xs font-bold mt-1 font-nunito tracking-wide">Successful Servers</p>
          </div>
          <div className="h-8 sm:h-12 w-px bg-gradient-main opacity-30"></div>
          <div className="text-center">
            <p className="text-3xl font-bold bg-gradient-alt bg-clip-text text-transparent font-fredoka">{uptime}%</p>
            <p className="text-xs font-bold mt-1 font-nunito tracking-wide">Uptime SLA</p>
          </div>
        </div>
      </div>

      {/* About Us Alert */}
      <CustomAlert 
        isOpen={showAboutAlert}
        message="🎯 About Fushiguro\n\nWe're a team of passionate Discord enthusiasts dedicated to transforming communities into thriving, engaging spaces. With 500+ successful servers and 99.9% uptime, we deliver premium Discord solutions including custom bots, server management, and 24/7 support.\n\nOur mission: Empower communities through cutting-edge Discord technology and unmatched customer service. Every solution is crafted with precision to match your community's unique needs."
        onClose={() => setShowAboutAlert(false)}
      />
    </section>
  );
}
