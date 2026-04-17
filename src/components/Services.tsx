import React from 'react';
import { ArrowRight, Crown } from 'lucide-react';

const services = [
  {
    image: 'sma.png',
    title: 'Server Management',
    description: 'Complete server management with custom roles, channels, and organizational tools. Keep your community perfectly organized and thriving!',
    price: '15'
  },
  {
    image: 'cdb.png',
    title: 'Custom Discord Bots',
    description: 'Professional bot development tailored to your needs. Moderation, fun games, music, or unique automation - we build it all!',
    featured: true,
    color: 'from-amber-200 to-yellow-200',
    price: '25'
  },
  {
    image: 'servermod.png',
    title: 'Server Moderation',
    description: 'Advanced moderation tools and anti-spam solutions. Keep your server safe with intelligent automated systems and 24/7 monitoring.',
    price: '10'
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 px-4 bg-gradient-to-br from-white via-pink-50 to-purple-50 scroll-reveal">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 font-fredoka tracking-[0.5px]">
            <span className="bg-gradient-main bg-clip-text text-transparent">
              Professional Services
            </span>
          </h2>
          <p className="text-sm sm:text-base text-text-light max-w-2xl mx-auto font-nunito leading-[1.7] font-bold">
            Comprehensive Discord management solutions
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className={`group relative rounded-3xl overflow-hidden transition-all duration-300 ${
                  service.featured
                    ? 'md:scale-105 md:col-span-1 md:row-span-2 flex flex-col'
                    : ''
                }`}
              >
                {/* Card Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                ></div>

                {/* Card Content */}
                <div
                  className={`relative p-8 h-full flex flex-col rounded-[32px] transition-all duration-500 ${
                    service.featured
                      ? 'bg-gradient-to-br from-amber-50 to-yellow-50 border-4 border-amber-200 shadow-lg shadow-amber-200/50 hover:shadow-xl hover:shadow-amber-200/60'
                      : 'bg-white border-2 border-pink-50 shadow-sm-soft hover:shadow-lg-soft group-hover:-translate-y-2'
                  }`}
                >
                {/* Icon */}
                  <div className="mb-4 flex items-center justify-between">
                    <div className="relative w-full h-40 rounded-[24px] bg-gradient-to-br from-pink-100 to-purple-100 overflow-hidden group-hover:shadow-md transition-all">
                      <div className="absolute top-2 left-2 z-20 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm">
                        <p className="text-[10px] font-bold text-pink-600 font-nunito uppercase tracking-tighter">Starts at ${service.price}</p>
                      </div>
                      <img
                        src={`/images/${service.image}`}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      {/* Fallback gradient if image not found */}
                      <div className="absolute inset-0 bg-gradient-to-br from-pink-200 to-purple-200 opacity-0 group-hover:opacity-20 transition-all"></div>
                    </div>
                    {service.featured && (
                      <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 rounded-full bg-accent text-text-dark text-xs font-bold">
                        <Crown size={14} /> Featured
                      </div>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-[#2D2342] mb-2 font-fredoka tracking-wide">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-text-light font-bold flex-grow mb-5 leading-[1.7] font-nunito">
                    {service.description}
                  </p>

                  {/* CTA Button */}
                  <button className={`w-full py-3 rounded-[20px] font-bold text-sm transition-all duration-300 active:scale-95 flex items-center justify-center gap-2 group/btn font-nunito shadow-sm hover:shadow-md ${
                    service.featured
                      ? 'bg-gradient-main text-white hover:-translate-y-1 shadow-pink-200/50'
                      : 'bg-pink-50 text-pink-600 hover:bg-gradient-main hover:text-white'
                  }`}>
                    Get Started Today
                    <ArrowRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>

                  {/* Hover Glow Effect */}
                  <div className={`absolute inset-0 rounded-3xl pointer-events-none ${
                    service.featured ? 'bg-gradient-to-br from-accent/0 to-transparent' : ''
                  }`}></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
