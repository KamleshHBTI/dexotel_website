import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        theme: {
          DEFAULT: '#2b7360',
          light: '#3c8f78',
          dark: '#1a5546',
          50: '#f0f7f4',
          100: '#d1e7e0',
          200: '#a3cfc1',
          300: '#75b7a2',
          400: '#479f83',
          500: '#2b7360',
          600: '#225c4d',
          700: '#1a453a',
          800: '#112e27',
          900: '#091714'
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'slide-down': 'slideDown 0.6s ease-out forwards',
        'draw-underline': 'drawUnderline 0.6s ease-out forwards',
        'pulse': 'pulse 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        drawUnderline: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        pulse: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'theme-gradient': 'linear-gradient(45deg, #2b7360, #3c8f78)',
        'theme-gradient-light': 'linear-gradient(45deg, #3c8f78, #75b7a2)',
      },
    },
  },
  plugins: [],
} satisfies Config;
