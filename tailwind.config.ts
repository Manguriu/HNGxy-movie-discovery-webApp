import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontSize: {
        xs: ['12px', '16px'],
        sm: ['14px', '24px'],
        base: ['16px', '24px'],
        lg: ['18px', '21.94px'],
        xl: ['20px', '24.38px'],
        '2xl': ['24px', '29.26px'],
        '3xl': ['36px', '50px'],
      },
     
      screens: {
        "wide": "1440px",
        "xs":"576px"
      },
      backgroundImage: {
        'hero': "url('/hero.png')",
       
      },
      fontFamily: {
        poppins: ['poppins', 'sans-serif'],
        DMSans: ['DM Sans', 'sans-serif'],
      },
    
    },
  },
  plugins: [],
}
export default config
