import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Глубокий черный и премиальный золотой
        black: "#050505",
        gold: {
          light: "#fde68a",
          DEFAULT: "#fbbf24",
          dark: "#b45309",
        },
      },
      backgroundImage: {
        'gold-linear': "linear-gradient(to bottom, #fde68a, #fbbf24, #b45309)",
      },
    },
  },
  plugins: [],
};
export default config;