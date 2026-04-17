import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "How do I start an order?",
    answer: "It's super easy! Just click any 'Get Started' or 'Let's Connect' button to jump to our contact section. DM us on Discord or Instagram, and we'll discuss your project immediately! ✨"
  },
  {
    question: "What are the payment methods?",
    answer: "We currently accept various digital payment methods including PayPal, Crypto, and major Credit Cards. Contact us for specific regional options! 💖"
  },
  {
    question: "How long does a custom bot take?",
    answer: "Usually, a custom bot takes 3-7 days depending on the complexity. Simple moderation bots are often ready in just 48 hours! 🚀"
  },
  {
    question: "Do you offer long-term support?",
    answer: "Absolutely! Every service includes a support period where we handle bugs and updates. We're here to grow with your community. 🛡️"
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 px-4 bg-white scroll-reveal">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-fredoka tracking-[0.5px]">
            <span className="bg-gradient-main bg-clip-text text-transparent">
              Common Questions
            </span>
          </h2>
          <p className="text-sm font-nunito font-bold text-text-light">
            Everything you need to know about Fushiguro Services ✨
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="rounded-[24px] border-2 border-pink-50 overflow-hidden transition-all duration-300 shadow-sm-soft hover:shadow-md"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full p-6 flex items-center justify-between text-left bg-white hover:bg-pink-50/30 transition-colors"
              >
                <span className="font-fredoka font-bold text-[#2D2342] pr-4">{faq.question}</span>
                <ChevronDown 
                  className={`text-pink-500 transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`} 
                  size={20} 
                />
              </button>
              <div 
                className={`transition-all duration-300 ease-in-out ${
                  activeIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-0 font-nunito text-sm text-text-light leading-relaxed font-bold border-t border-pink-50/50">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Decorative Element */}
        <div className="mt-12 flex justify-center">
          <div className="p-4 bg-purple-50 rounded-full flex items-center gap-3 animate-bounce-soft">
            <HelpCircle size={20} className="text-purple-500" />
            <p className="text-xs font-nunito font-bold text-[#2D2342]">
              Still have questions? <a href="#contact" className="text-pink-500 underline">DM us now!</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}