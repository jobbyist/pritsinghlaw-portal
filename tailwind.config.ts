import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: { DEFAULT: "#1b3b6f", light: "#294f8a", dark: "#10294d" },
        accent: { DEFAULT: "#f5b301", dark: "#d99a00" }
      }
    },
  },
  plugins: [],
} satisfies Config;
