import React, { useState, useEffect } from 'react';
import { Users, Zap, Palette, MessageCircle, Heart } from 'lucide-react';

const features = [
  {
    icon: Users,
    title: 'Happy Communities',
    description: 'Join 500+ thriving Discord servers already using our services!',
    counter: true,
    maxValue: 500,
    bg: 'from-pink-100 to-pink-200',
    iconColor: 'text-pink-600',
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Quick turnaround times and immediate support for all your needs.',
    bg: 'from-purple-100 to-purple-200',
    iconColor: 'text-purple-600',
  },
  {
    icon: Palette,
    title: 'Custom Solutions',
    description: 'Fully customized services tailored to your unique personality and goals.',
    bg: 'from-blue-100 to-blue-200',
    iconColor: 'text-blue-600',
  },
  {
    icon: MessageCircle,
    title: '24/7 Support',
    description: 'Always available via Discord for questions, support, and collaboration.',
    bg: 'from-yellow-100 to-yellow-200',
    iconColor: 'text-yellow-600',
  },
];

const AnimatedCounter = ({ maxValue, duration = 2000 }: { maxValue: number; duration?: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = maxValue / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= maxValue) {
        setCount(maxValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [maxValue, duration]);

  return <>{count}+</>;
};

export default function Features() {
  return (
    <section id="about" className="py-16 px-4 bg-gradient-to-b from-white via-pink-50 to-purple-50 scroll-reveal">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 font-fredoka tracking-[0.5px]">
            <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
              Why Choose Us
            </span>
          </h2>
          <p className="text-sm sm:text-base text-text-light max-w-2xl mx-auto font-nunito leading-[1.7]">
            Excellence backed by expertise and passion
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative p-6 rounded-3xl bg-white border-2 border-pink-50 shadow-sm-soft hover:shadow-lg-soft transition-all duration-500 hover:-translate-y-2 cursor-pointer overflow-hidden transform hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Cute Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-100/0 to-pink-100/0 group-hover:from-purple-50 group-hover:to-pink-50 transition-all duration-500"></div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`p-4 rounded-2xl bg-gradient-to-br ${feature.bg} mb-4 w-fit group-hover:rotate-12 transition-transform duration-500 shadow-sm`}>
                    {feature.counter ? (
                      <Heart size={24} className="text-pink-600 fill-pink-600 animate-bounce-soft" />
                    ) : (
                      <Icon size={24} className={`${feature.iconColor} transition-colors`} />
                    )}
                  </div>

                  {/* Title with Counter */}
                  <div className="mb-2">
                    {feature.counter ? (
                      <>
                        <p className="text-3xl font-bold text-transparent bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text mb-1 font-fredoka">
                          <AnimatedCounter maxValue={feature.maxValue} duration={2500} />
                        </p>
                        <h3 className="text-base font-bold text-text-dark font-fredoka tracking-wide">
                          {feature.title}
                        </h3>
                      </>
                    ) : (
                      <h3 className="text-base font-bold text-text-dark group-hover:text-pink-500 transition-colors font-fredoka tracking-wide">
                        {feature.title}
                      </h3>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-xs text-text-light font-bold leading-[1.7] font-nunito">
                    {feature.description}
                  </p>

                  {/* Bottom Accent Line */}
                  <div className="mt-6 h-1 w-0 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-500 rounded-full\"></div>
                </div>

                {/* Cute Sparkle Corner */}
                <div className="absolute -top-2 -right-2 text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-bounce-soft\">✨</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
