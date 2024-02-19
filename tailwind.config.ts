import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        sans: ['var(--font-standard)']
      },
      colors: {
        'primary': '#4FB06A',
        'secondary': '#87276A',
        'brandblack': '#1a1a1a',
      },
      fontSize: {
        'xxs' : ['10px','12px']
      }
    },
  },
  plugins: [],
}
export default config
