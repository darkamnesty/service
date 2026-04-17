import React, { useState, useEffect } from 'react';
import { Zap, Star, Shield } from 'lucide-react';

export default function CTA() {
  const [uptime, setUptime] = useState(99.9);

  useEffect(() => {
    const interval = setInterval(() => {
      // Generate random uptime between 97.0 and 99.9
      const randomUptime = (Math.random() * (99.9 - 97.0) + 97.0).toFixed(1);
      setUptime(parseFloat(randomUptime));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-pink-50 via-white to-purple-50 scroll-reveal">
      <div className="max-w-5xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-main opacity-95"></div>
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          </div>

          {/* Content */}
          <div className="relative px-8 sm:px-16 py-16 text-center text-white">
            <p className="font-satisfy text-pink-200 text-xl mb-4 animate-fade-in-up">
              Quality you can feel ✨
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold mb-8 leading-tight animate-fade-in-up font-fredoka tracking-[0.5px]">
              Premium Discord Services You Can Trust
            </h2>

            {/* Stats Grid */}
            <div className="grid sm:grid-cols-3 gap-8 mt-12">
              {/* Uptime */}
              <div className="flex flex-col items-center group cursor-pointer transform transition-all duration-300 hover:scale-110">
                <div className="p-3 rounded-full bg-white/20 mb-4 group-hover:bg-white/40 transition-all">
                  <Shield size={28} className="text-white" />
                </div>
                <p className="text-5xl font-bold mb-1 font-fredoka">{uptime}%</p>
                <p className="text-sm font-bold opacity-90 font-nunito tracking-wide">Uptime SLA</p>
                <p className="text-xs opacity-70 mt-2">Updates every sec ✨</p>
              </div>

              {/* Rating */}
              <div className="flex flex-col items-center group cursor-pointer transform transition-all duration-300 hover:scale-110">
                <div className="p-3 rounded-full bg-white/20 mb-4 group-hover:bg-white/40 transition-all">
                  <Star size={28} className="text-white" />
                </div>
                <p className="text-5xl font-bold mb-1 font-fredoka">4.9★</p>
                <p className="text-sm font-bold opacity-90 font-nunito tracking-wide">Client Rating</p>
                <p className="text-xs opacity-70 mt-2">From 500+ reviews</p>
              </div>

              {/* Projects */}
              <div className="flex flex-col items-center group cursor-pointer transform transition-all duration-300 hover:scale-110">
                <div className="p-3 rounded-full bg-white/20 mb-4 group-hover:bg-white/40 transition-all">
                  <Zap size={28} className="text-white" />
                </div>
                <p className="text-5xl font-bold mb-1 font-fredoka">500+</p>
                <p className="text-sm font-bold opacity-90 font-nunito tracking-wide">Successful Projects</p>
                <p className="text-xs opacity-70 mt-2">And counting! 🚀</p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-12">
              <a href="#contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-[20px] bg-white text-primary-dark font-bold text-lg hover:shadow-2xl hover:-translate-y-1 hover:scale-105 transition-all duration-300 group font-nunito">
                Get Started Today
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
