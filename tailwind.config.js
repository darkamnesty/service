/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#ff6b9d',
        'primary-dark': '#ff1493',
        secondary: '#a78bfa',
        accent: '#fbbf24',
        'bg-main': '#fff5f9',
        'bg-light': '#fffbfe',
        'text-dark': '#2d1b4e',
        'text-light': '#6b4c8a',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'playfair': ['Playfair Display', 'serif'],
        'inter': ['Inter', 'sans-serif'],
        'satisfy': ['Satisfy', 'cursive'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'bounce-soft': 'bounce-soft 3s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 1s ease forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(10deg)' },
        },
        'bounce-soft': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        fadeInUp: {
          from: {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
      backgroundImage: {
        'gradient-main': 'linear-gradient(135deg, #ff6b9d 0%, #a78bfa 100%)',
        'gradient-alt': 'linear-gradient(135deg, #a78bfa 0%, #fbbf24 100%)',
        'gradient-accent': 'linear-gradient(135deg, #fbbf24 0%, #ff6b9d 100%)',
      },
      boxShadow: {
        'md-soft': '0 10px 30px rgba(255, 107, 157, 0.15)',
        'lg-soft': '0 20px 50px rgba(255, 107, 157, 0.25)',
        'sm-soft': '0 4px 15px rgba(255, 107, 157, 0.1)',
      }
    },
  },
  plugins: [],
};
