import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'max-project-lg': { 'max': '1000px' },
        // => @media (max-width: 1000px) { ... }

        '2xl': { 'max': '1535px' },
        // => @media (max-width: 1535px) { ... }

        'xl': { 'max': '1279px' },
        // => @media (max-width: 1279px) { ... }
        
        '2lg': { 'max': '1123px' },
        // => @media (max-width: 1123px) { ... }

        'lg': { 'max': '1023px' },
        // => @media (max-width: 1023px) { ... }

        'md': { 'max': '767px' },
        // => @media (max-width: 767px) { ... }

        'sm': { 'max': '639px' },
        // => @media (max-width: 639px) { ... }

        'max-2xl': { 'max': '1535px' },
        // => @media (max-width: 1535px) { ... }

        'max-xl': { 'max': '1279px' },
        // => @media (max-width: 1279px) { ... }

        'max-lg': { 'max': '1023px' },
        // => @media (max-width: 1023px) { ... }

        'max-md': { 'max': '767px' },
        // => @media (max-width: 767px) { ... }

        'max-sm': { 'max': '639px' },
        // => @media (max-width: 639px) { ... }

      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-linear": "linear-gradient(270deg, var(--e-global-color-primary) 0%, var(--e-global-color-secondary) 100%)",
        "gradient-card-design": "var(--background-card-design)",
        "gradient-card-essenc": "var(--background-card-essenc)",
        "gradient-card-advance": "var(--background-card-advance)",
        "gradient-card-premium": "var(--background-card-premium)",
      },
      fontFamily: {
        quicksand: ['Quicksand', "sans-serif"],
        ubuntu: ['Ubuntu', "sans-serif"],
      },
      keyframes: {
        backgroundButton: {
          "from": {
            "background": "black",
            "transform": "rotateY(90deg)"
          },

          "to": {
            "background": "black",
            "transform": "rotateY(0deg)"
          }
        },
        bounceIn: {
          "0%": {
            "transform": "translateX(100%)",
            "letter-spacing": "1px"
          },

          "40%": {
            "transform": "translateX(0%)",
            "letter-spacing": "1px"
          },

          "45%": {
            "letter-spacing": "-1px",
          },

          "65%": {
            "letter-spacing": "1px",
          },

          "100%": {
            "letter-spacing": "normal",

          }
        },
        bounceInWidth: {
          "0%": {
            "transform": "translateX(300%)",
          },

          "40%": {
            "transform": "translateX(0%)",
          },

          "45%": {
            "width": "70px",
          },

          "65%": {
            "width": "120px",
          },

          "100%": {
            "width": "100px",

          }
        },
        showElementSlide: {
          "from": {
            "opacity": "0",
            "transform": "translateY(100%)",
          },

          "to": {
            "opacity": "1",
            "transform": "translateY(0%)",
          }
        },
        showElement: {
          "from": {
            "opacity": "0",
          },

          "to": {
            "opacity": "1",
          }
        },
        jelloHorizontal: {
          "0%": {
            "opacity": "0",
          },

          "10%": {
            "transform": "scale3d(1, 1, 1)",
            "opacity": ".5",
          },

          "30%": {
            "transform": "scale3d(1.25, 0.75, 1)",
            "opacity": ".7",
          },

          "40%": {
            "transform": "scale3d(0.75, 1.25, 1)",
            "opacity": "1",
          },

          "50%": {
            "transform": "scale3d(1.15, 0.85, 1)",
            "opacity": "1",
          },

          "65%": {
            "transform": "scale3d(0.95, 1.05, 1)",
            "opacity": "1",
          },

          "75%": {
            "transform": "scale3d(1.05, 0.95, 1)",
            "opacity": "1",
          },

          "100%": {
            "transform": "scale3d(1, 1, 1)",
            "opacity": "1",
          }
        }
      },
      animation: {
        bounceIn: 'bounceIn 2s both ease-in-out',
        showElementSlide: 'showElementSlide 3s both .5s ease-in-out',
        showElement: 'showElement 3s both .5s ease-in-out',
        jelloHorizontal: 'jelloHorizontal 2s both 1s',
      },
      prefix: 'tw-',
    }
  },
  plugins: [],
};
export default config;
