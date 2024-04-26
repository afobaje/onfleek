import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'theme-blue': 'rgba(51, 38, 174, 1)',
        'theme-white': 'rgba(255, 255, 255, 1)',
        'card-bg': 'rgba(245, 245, 252, 1)',
        'theme-red':'rgba(255, 57, 43, 1)',
        'theme-gray':'rgba(196, 189, 213, 1)',
        'input-gray':'rgba(245, 245, 252, 1)'

      }
    },
  },
  plugins: [],
};
export default config;
