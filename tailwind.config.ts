import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary
        cyan: "hsl(178, 100%, 50%)",
        softBlue : "hsl(215, 51%, 70%)",

        // Neutral
        "very-dark-blue-main-bg": "hsl(217, 54%, 11%)",
        "very-dark-blue-card-bg": "hsl(216, 50%, 16%)",
        "very-dark-blue-line": "hsl(215, 32%, 27%)",
      },
    },
  },
  plugins: [],
};
export default config;
