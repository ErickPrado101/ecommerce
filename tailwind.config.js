/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#E3DED4',
        'primary-light': '#F3F1EA',
        secundary: '#211F20',
        'secundary-light': '#5E3519',
      },
      keyframes: {
        flash: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        flashAppear: {
          '0%': { opacity: '0', scale: '1' },
          '20%': { scale: '1.1' },
          '100%': { opacity: '1', scale: '1' },
        },
        slideLeft: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideRight: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(5rem)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        bgOpacity: {
          '0%': { opacity: '0' },
          '100%': { opacity: '0.5' },
        },
        opacityWeak: {
          '0%': { opacity: '0' },
          '100%': { opacity: '0.7' },
        },
        opacity: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        appearTransform: {
          '0%': { width: '100%' },
          '100%': { width: '0' },
        },
      },

      animation: {
        flash: 'flash 0.3s ease-in-out backwards',
        flashAppear: 'flashAppear 0.4s ease-in-out backwards',
        slideUp: 'slideUp 0.4s ease-in-out backwards',
        slideLeft: 'slideLeft 0.5s ease-in-out forwards',
        slideRight: 'slideRight 0.5s ease-in-out forwards',
        bgOpacity: 'bgOpacity 0.3s ease-in-out both',
        appearTransform: 'appearTransform 0.4s ease-in-out both',
        opacity: 'opacity 0.3s ease-in-out backwards',
        opacityWeak: 'opacityWeak 0.3s ease-in-out backwards',
      },
    },
  },
  plugins: [],
};
