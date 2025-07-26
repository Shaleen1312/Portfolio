import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Light mode colors
        primary: {
          light: '#2D3E50',
          dark: '#E2E8F0'
        },
        secondary: {
          light: '#3498DB',
          dark: '#60A5FA'
        },
        accent: {
          light: '#E74C3C',
          dark: '#F87171'
        },
        background: {
          light: '#F8FAFC',
          dark: '#1E293B'
        },
        surface: {
          light: '#FFFFFF',
          dark: '#334155'
        },
        text: {
          primary: {
            light: '#1E293B',
            dark: '#F1F5F9'
          },
          secondary: {
            light: '#475569',
            dark: '#CBD5E1'
          }
        }
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}

export default config 