import { fontFamily } from "tailwindcss/defaultTheme";
import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Instrument Sans", ...fontFamily.sans],
        serif: ["Instrument Serif", ...fontFamily.serif],
        mono: ["JetBrains Mono Variable", ...fontFamily.mono],
      },
    },
  },
  plugins: [typography],
};
