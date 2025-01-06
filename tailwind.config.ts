import type { Config } from "tailwindcss";

export default {
 content: [
  "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
 ],
 theme: {
  extend: {
   colors: {
    primary: "#354da1",
    secondary: "#59668a",
    tulang: "#f4f4f4",
    hitam: "#1e1e1e",
   },
   fontFamily: {
    DejaVu: ["var(--font-dejavu)"],
   },
  },
 },
 plugins: [require("daisyui")],
} satisfies Config;

