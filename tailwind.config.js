/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,ts}',
  ],
  darkMode: 'class',
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        bg: {
          base: '#090B12',
          secondary: '#101521',
        },
        surface: {
          DEFAULT: '#151C2A',
          elevated: '#1B2535',
        },
        accent: {
          cyan: '#00E5FF',
          magenta: '#FF2BD6',
          violet: '#8B5CF6',
        },
        status: {
          success: '#00D68F',
          warning: '#FFC857',
          error: '#FF4D67',
        },
        text: {
          primary: '#F1F5F9',
          secondary: '#94A3B8',
        },
        border: {
          DEFAULT: 'rgba(148, 163, 184, 0.14)',
        },
      },
      fontFamily: {
        display: ['Rajdhani', 'sans-serif'],
        hero: ['Orbitron', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        xs: '4px',
        sm: '6px',
        md: '10px',
        lg: '14px',
      },
      spacing: {
        section: '3rem',
        'section-lg': '4rem',
      },
      boxShadow: {
        1: '0 1px 2px rgba(0, 0, 0, 0.4)',
        2: '0 4px 12px rgba(0, 0, 0, 0.45)',
        'glow-cyan': '0 0 12px rgba(0, 229, 255, 0.25)',
        'glow-violet': '0 0 12px rgba(139, 92, 246, 0.3)',
      },
    },
  },
  plugins: [],
};
