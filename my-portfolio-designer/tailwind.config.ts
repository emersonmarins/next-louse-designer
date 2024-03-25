import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
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
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
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
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        bounceIn: 'bounceIn 2s both ease-in-out',
        showElementSlide: 'showElementSlide 3s both .5s ease-in-out',
        showElement: 'showElement 3s both .5s ease-in-out',
        jelloHorizontal: 'jelloHorizontal 2s both 1s',
      },
      prefix: 'tw-',      
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config