import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

const firstNames = {
  german: ['Lukas', 'Leonie', 'Maximilian', 'Sophie', 'Finn', 'Hanna', 'Jakob', 'Mia'],
  american: ['James', 'Emma', 'Noah', 'Olivia', 'Liam', 'Ava', 'William', 'Sophia'],
  indian: ['Arjun', 'Saanvi', 'Advait', 'Myra', 'Reyansh', 'Diya', 'Vivaan', 'Prisha']
};

const lastNames = {
  german: ['Müller', 'Schmidt', 'Schneider', 'Fischer', 'Weber', 'Meyer'],
  american: ['Smith', 'Johnson', 'Brown', 'Williams', 'Jones', 'Miller'],
  indian: ['Sharma', 'Gupta', 'Malhotra', 'Iyer', 'Patel', 'Reddy']
};

const reviewTemplates = [
  "The {item} is literally the best thing that happened to my Discord! ✨",
  "I'm obsessed with how the {item} looks. So aesthetic and bubbly! 💖",
  "Fastest {item} delivery ever. Fushiguro is the GOAT. 🚀",
  "The {item} security is unreal. No more raids, just vibes! 🛡️",
  "Actually adorable design on the {item}. My members love it! 🥰",
  "Support team helped me set up my {item} in minutes. 10/10!",
  "Premium quality {item}. You really get what you pay for here. ✨",
  "The {item} integration was so smooth. Fushiguro knows their stuff."
];

const items = [
  "Server Management",
  "Custom Bot",
  "Security Audit",
  "Token grabber",
  "Moderation Setup",
  "Community Layout",
  "Image logger"
];

interface Testimonial {
  id: number;
  name: string;
  content: string;
  rating: number;
  type: 'german' | 'american' | 'indian';
}

const generateTestimonials = (): Testimonial[] => {
  const testimonials: Testimonial[] = [];
  const regions: ('german' | 'american' | 'indian')[] = ['german', 'american', 'indian'];

  for (let i = 0; i < 60; i++) {
    const region = regions[i % 3];
    const fName = firstNames[region][Math.floor(Math.random() * firstNames[region].length)];
    const lName = lastNames[region][Math.floor(Math.random() * lastNames[region].length)];
    const item = items[Math.floor(Math.random() * items.length)];
    const template = reviewTemplates[Math.floor(Math.random() * reviewTemplates.length)];
    
    testimonials.push({
      id: i,
      name: `${fName} ${lName}`,
      content: template.replace('{item}', item),
      rating: Math.random() > 0.2 ? 5 : 4,
      type: region
    });
  }
  return testimonials;
};

const testimonialData = generateTestimonials();

export default function Testimonials() {
  // Split into two rows for a more dense look
  const firstRow = testimonialData.slice(0, 30);
  const secondRow = testimonialData.slice(30, 60);

  const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
    <div className="flex-shrink-0 w-72 mx-4 p-6 rounded-[28px] bg-white border-2 border-pink-50 shadow-sm-soft hover:shadow-md transition-all duration-300 group cursor-default transform-gpu">
      <div className="flex items-center gap-1 mb-3">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            size={14} 
            className={`${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-200'} transition-transform group-hover:scale-110`} 
            style={{ transitionDelay: `${i * 0.1}s` }}
          />
        ))}
      </div>
      <p className="text-[#2D2342] font-nunito text-sm leading-relaxed mb-4 italic">
        "{testimonial.content}"
      </p>
      <div className="flex items-center justify-between border-t border-pink-50 pt-3">
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <span className="font-fredoka text-sm text-[#2D2342] tracking-wide">{testimonial.name}</span>
            <CheckCircle2 size={12} className="text-green-500 fill-green-50" />
          </div>
          <span className="text-[10px] font-bold text-pink-400 uppercase font-nunito tracking-tighter">Verified Client</span>
        </div>
        <Quote size={18} className="text-purple-100 group-hover:text-purple-200 transition-colors" />
      </div>
    </div>
  );

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-purple-50/50 to-white overflow-hidden scroll-reveal">
      <div className="max-w-6xl mx-auto px-4 mb-12 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-fredoka tracking-[0.5px]">
          <span className="bg-gradient-main bg-clip-text text-transparent">
            What Our Community Says
          </span>
        </h2>
        <p className="text-sm sm:text-base text-text-light max-w-2xl mx-auto font-nunito leading-[1.7] font-bold">
          Don't just take our word for it—join hundreds of happy server owners! ✨
        </p>
      </div>

      {/* Marquee Rows */}
      <div className="relative flex flex-col gap-8">
        {/* First Row - Left to Right */}
        <div className="flex overflow-hidden group">
          <div className="flex animate-marquee group-hover:slow-down">
            {firstRow.map((t) => <TestimonialCard key={t.id} testimonial={t} />)}
            {/* Duplicate for infinite loop */}
            {firstRow.map((t) => <TestimonialCard key={`dup-${t.id}`} testimonial={t} />)}
          </div>
        </div>

        {/* Second Row - Right to Left */}
        <div className="flex overflow-hidden group">
          <div className="flex animate-marquee-reverse group-hover:slow-down">
            {secondRow.map((t) => <TestimonialCard key={t.id} testimonial={t} />)}
            {/* Duplicate for infinite loop */}
            {secondRow.map((t) => <TestimonialCard key={`dup-${t.id}`} testimonial={t} />)}
          </div>
        </div>

        {/* Gradient Overlays for smooth edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
      </div>

      <style>{`
        .animate-marquee {
          animation: marquee 60s linear infinite;
          will-change: transform;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 100s linear infinite;
          will-change: transform;
        }
        /* Logic: Hover = slow down to 250s duration (very slow) */
        .slow-down {
          animation-duration: 250s !important;
        }
        @keyframes marquee {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        @keyframes marquee-reverse {
          0% { transform: translate3d(-50%, 0, 0); }
          100% { transform: translate3d(0, 0, 0); }
        }
      `}</style>
    </section>
  );
}