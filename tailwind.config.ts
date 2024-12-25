import type { Config } from "tailwindcss";

export default {
 content: [
  "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
 ],
 theme: {
  extend: {
   primary: {
    light: "#C1D7FF",
    DEFAULT: "#4C81F1",
    dark: "#0D3B66",
    biru: "#516091",
   },
  },
 },
 plugins: [],
} satisfies Config;

