import React from 'react';
import { X, Heart, Sparkles } from 'lucide-react';

interface CustomAlertProps {
  isOpen: boolean;
  message: string;
  onClose: () => void;
}

export default function CustomAlert({ isOpen, message, onClose }: CustomAlertProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
        style={{ animation: 'fadeIn 0.3s ease-out' }}
      ></div>

      {/* Alert Box */}
      <div
        className="relative bg-gradient-to-br from-white via-pink-50 to-purple-50 rounded-3xl shadow-2xl max-w-md w-full border-4 border-pink-200 p-8 overflow-hidden"
        style={{ animation: 'scaleInBounce 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)' }}
      >
        {/* Decorative Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-pink-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-500 rounded-full blur-3xl animate-pulse"></div>
        </div>

        {/* Content */}
        <div className="relative z-10">
          {/* Header with Icons */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <Sparkles className="text-pink-500 animate-bounce-soft" size={28} />
              <Heart className="text-purple-500 animate-float" size={24} />
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-pink-200 rounded-full transition-all duration-300 transform hover:scale-110"
            >
              <X size={24} className="text-text-dark" />
            </button>
          </div>

          {/* Message */}
          <p className="text-center font-inter text-text-dark font-semibold leading-relaxed mb-6 text-sm whitespace-pre-line">
            {message}
          </p>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="w-full py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-black font-inter rounded-2xl hover:shadow-lg-soft transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 shadow-md"
          >
            <Heart size={18} className="fill-white" />
            Got it!
          </button>
        </div>

        {/* Floating Particles */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${2 + Math.random() * 2}s ease-in-out infinite`,
              animationDelay: `${i * 0.2}s`,
            }}
          ></div>
        ))}

        <style>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          @keyframes scaleInBounce {
            0% {
              transform: scale(0.5);
              opacity: 0;
            }
            50% {
              transform: scale(1.05);
            }
            100% {
              transform: scale(1);
              opacity: 1;
            }
          }

          @keyframes float {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-10px);
            }
          }
        `}</style>
      </div>
    </div>
  );
}
