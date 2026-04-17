import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import CustomAlert from './CustomAlert';

const products = [
  {
    image: 'image.png',
    title: 'Image logger',
    description: 'logs user who clicked on image & provide information like IP, ISP, Location, Device, OS, Browser and more. Perfect for moderation and analytics!',
    stock: 'in',
    price: 5.99,
  },
  {
    image: 'token.png',
    title: 'Token grabber',
    description: 'Extracts Discord tokens from users who interact with the exe file',
    featured: true,
    stock: 'in',
    price: 9.99,
  },
  {
    image: 'sb.png',
    title: 'Server Booster',
    description: 'boost your discord server with the bot or EXE file, it will provide various features to enhance your server experience and attract more members.',
    stock: 'out',
    price: 15.99,
  },
];

export default function Products() {
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const handleProductClick = (product: typeof products[0]) => {
    let message = '';
    if (product.stock === 'in') {
      message = `If you're interested in the "${product.title}", please contact us to discuss your needs!`;
      setTimeout(() => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      }, 500); // Delay scrolling slightly after alert appears
    } else {
      message = `The "${product.title}" is currently out of stock. Please check back later or contact us for updates!`;
    }
    setAlertMessage(message);
    setShowAlert(true);
  };

  return (
    <>
    <section id="products" className="py-16 px-4 bg-gradient-to-br from-purple-50 via-white to-pink-50 scroll-reveal">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 animate-fade-in-up font-fredoka tracking-[0.5px]">
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Advanced Tools
            </span>
          </h2>
          <p className="text-sm sm:text-base text-text-light max-w-2xl mx-auto font-nunito leading-[1.7] font-bold">
            AI-powered features for your community
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className={`group relative rounded-[32px] transition-all duration-500 transform hover:scale-[1.03] cursor-pointer ${
                product.featured ? 'md:scale-105' : ''
              }`}
              onClick={() => handleProductClick(product)}
            >
              {/* Card Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-pink-100 opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-[32px]"></div>

              {/* Card Content */}
              <div
                className={`relative p-6 h-full flex flex-col rounded-[32px] border-2 transition-all duration-500 ${
                  product.featured
                    ? 'bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200 shadow-lg shadow-purple-200/40'
                    : 'bg-white border-pink-50 shadow-sm-soft group-hover:shadow-lg-soft'
                }`}
              >
                {/* Image Container */}
                <div className="relative w-full h-40 rounded-[24px] bg-gray-50 mb-4 flex items-center justify-center overflow-hidden transition-all">
                  <img
                    src={`/images/${product.image}`}
                    alt={product.title}
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Title & Stock Badge */}
                <div className="flex items-center justify-between mb-2 gap-2">
                  <h3 className="text-lg font-bold text-[#2D2342] font-fredoka flex-grow tracking-wide">
                    {product.title}
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className={`text-xs px-2 py-1 rounded-full font-bold whitespace-nowrap ${
                      product.stock === 'in' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-red-100 text-red-700'
                    }`}>
                      {product.stock === 'in' ? '✓ In Stock' : '✗ Out of Stock'}
                    </span>
                    <span className="text-sm font-bold text-purple-600 font-nunito">${product.price.toFixed(2)}</span>
                  </div>
                </div>
                {product.featured && (
                  <div className="mb-2">
                    <span className="text-xs bg-gradient-to-r from-purple-500 to-pink-500 text-white px-2 py-1 rounded-full font-bold">★ Featured</span>
                  </div>
                )}

                {/* Description */}
                <p className="text-xs text-text-light font-bold flex-grow mb-5 leading-[1.7] font-nunito">
                  {product.description}
                </p>

                {/* CTA Button */}
                <button className={`w-full py-3 rounded-[20px] font-bold text-sm transition-all duration-300 active:scale-95 flex items-center justify-center gap-2 group/btn font-nunito shadow-sm hover:shadow-md ${
                  product.featured
                    ? 'bg-gradient-main text-white hover:-translate-y-1'
                    : 'bg-purple-50 text-purple-600 hover:bg-gradient-main hover:text-white'
                }`}>
                  Try Now
                  <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
      {/* Custom Alert Modal */}
      <CustomAlert isOpen={showAlert} message={alertMessage} onClose={() => setShowAlert(false)} />
    </>
  );
}
