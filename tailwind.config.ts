import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      colors: {
        border: "#384261",
        input: "#191f41",
        ring: "#647bff",
        background: "#090a1a",
        foreground: "#7d7c85",
        primary: {
          DEFAULT: "#647bff",
          foreground: "#edf0fc",
        },
        secondary: {
          DEFAULT: "#1f2751",
          foreground: "#647bff",
        },
        tertiary: {
          DEFAULT: "#090a1a",
        },
        quaternary: {
          DEFAULT: "#ffffff20",
        },
        quinary: {
          DEFAULT: "#222231",
        },
        senary: {
          DEFAULT: "#282937",
        },
        destructive: {
          DEFAULT: "#647bff",
          foreground: "#090a1a",
        },
        muted: {
          DEFAULT: "#4b5193",
          foreground: "#4b5193",
        },
        accent: {
          DEFAULT: "#2d334c",
          foreground: "#647bff",
        },
        popover: {
          DEFAULT: "#4b5193",
          foreground: "#4b5193",
        },
        card: {
          DEFAULT: "#090a1a",
          foreground: "#647bff",
        },
      },
      keyframes: {
        "upDown": {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(20px)' },
        },
        "upDownLarge": {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(50px)' },
        },
      },
      animation: {
        "up-down": "upDown 5s ease-in-out infinite",
        "up-down-3": "upDownLarge 7.8s ease-in-out infinite",
        "up-down-2": "upDownLarge 7.6s ease-in-out infinite",
        "up-down-1": "upDownLarge 7.4s ease-in-out infinite",
      },
      backgroundImage: {
        work_project_bg: "url(/image/project-bg.png)",
        contact_illustration: "url(/icon/illustration.svg)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
