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
      fontFamily: {
        mono: ['var(--font-mono)', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      colors: {
        primary: {
          light: '#1E293B',
          dark: '#E6EDF3'
        },
        secondary: {
          light: '#0D9488',
          dark: '#10B981'
        },
        accent: {
          light: '#0EA5E9',
          dark: '#34D399'
        },
        background: {
          light: '#F8FAFC',
          dark: '#0A0E14'
        },
        surface: {
          light: '#FFFFFF',
          dark: '#111722'
        },
        border: {
          light: '#E2E8F0',
          dark: '#1F2937'
        },
        text: {
          primary: {
            light: '#0F172A',
            dark: '#F2F5F8'
          },
          secondary: {
            light: '#475569',
            dark: '#B8C2CC'
          }
        }
      },
      boxShadow: {
        'glow': '0 0 0 1px rgba(16, 185, 129, 0.15), 0 8px 30px -8px rgba(16, 185, 129, 0.25)',
        'glow-sm': '0 0 0 1px rgba(16, 185, 129, 0.2)',
      },
      backgroundImage: {
        'grid-pattern': 'linear-gradient(to right, rgba(148,163,184,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.06) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid': '32px 32px',
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
        'float': 'float 3s ease-in-out infinite',
        'pulse-dot': 'pulse-dot 2s ease-in-out infinite',
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
        'pulse-dot': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.5', transform: 'scale(0.85)' },
        },
      },
    },
  },
  plugins: [],
}

export default config 