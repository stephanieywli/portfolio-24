import { typography } from '@material-tailwind/react'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'black': '#000000',
      'off-white': {
        DEFAULT: '#f6f6f6',
        '100': '#efefef',
        '200': '#dcdcdc',
        '300': '#bdbdbd',
        '400': '#989898',
        '500': '#7c7c7c',
        '600': '#656565',
        '700': '#525252',
        '800': '#464646',
        '900': '#3d3d3d',
        '950': '#292929',
      },
      'indigo': {
        '50': '#f4f3fa',
        '100': '#ece9f6',
        '200': '#ddd6ef',
        '300': '#c9bde4',
        '400': '#b7a2d7',
        '500': '#a88bc9',
        '600': '#9972b9',
        '700': '#8561a1',
        '800': '#6c5083',
        '900': '#58456a',
        DEFAULT: '#31263a',
      },
      'grey': {
        '50': '#f5f5f1',
        '100': '#e6e6db',
        DEFAULT: '#ccccb7',
        '300': '#b2b192',
        '400': '#9b9874',
        '500': '#8d8865',
        '600': '#787156',
        '700': '#615947',
        '800': '#544d3f',
        '900': '#4a4339',
        '950': '#29241f',
      },
      'red': {
        '50': '#fff0f0',
        '100': '#ffdddd',
        '200': '#ffc1c1',
        '300': '#ff9595',
        '400': '#ff5959',
        '500': '#ff2626',
        '600': '#fc0606',
        DEFAULT: '#cc0000',
        '800': '#af0505',
        '900': '#900c0c',
        '950': '#500000',
      },
      'green': {
        '50': '#edfcf3',
        '100': '#d2f9df',
        '200': '#a9f1c5',
        '300': '#72e3a5',
        '400': '#39ce82',
        '500': '#15b467',
        '600': '#099252',
        '700': '#087445',
        '800': '#095c38',
        '900': '#084c30',
        DEFAULT: '#032719',
    },
    },
    extend: {
      screens: {
        '3xl': '1900px',
        '4k': '2560px',
      },
      fontFamily: {
        garamond: ['var(--font-garamond)'],
        neue: ['var(--font-neue)'],
      },
      backgroundImage: {
        'gradient-png': "url('/backgrounds/gradient.png')",
        'hero-pattern': "url('/backgrounds/noise.gif')",
      },
      animation: {
        'spin-slow': 'spin 17s linear infinite',
        'scroll-x': 'scroll 10s linear infinite'
      },
      keyframes: {
        'scroll': {
          '0%': {transform: 'translateX(0%)'},
          '100%': {transform: 'translateX(-100%)'},
        },
      },
    },
  },
  screens: {
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
export default config
