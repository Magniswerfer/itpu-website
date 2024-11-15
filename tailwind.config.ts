import { type Config } from "tailwindcss";

export default {
  theme: {
    extend: {
      colors: {
        // Primary colors
        "enl-red": {
          DEFAULT: "#D0004D",
          uncoated: "#D0004D", // PANTONE 193U equivalent
        },
        "enl-green": {
          DEFAULT: "#159F6B",
          dark: "#007266",
          light: "#76B095",
        },

        // Secondary colors
        "enl-yellow": {
          DEFAULT: "#FFCF20",
          dark: "#F7A800",
          light: "#FFEAAD",
        },
        "enl-orange": {
          DEFAULT: "#F18A2D",
          dark: "#EA5D0A",
          light: "#F7B999",
        },
        "enl-pink": {
          DEFAULT: "#F5AAAD",
          dark: "#E67593",
          light: "#F9D1D9",
        },
        "enl-purple": {
          DEFAULT: "#703290",
          dark: "#54236F",
          light: "#9880B6",
        },
        "enl-blue": {
          DEFAULT: "#8BD0E4",
          dark: "#58AEC8",
          light: "#C2E0EF",
        },

        // Grayscale
        "enl-gray": {
          DEFAULT: "#E5E5E5", // 15% black
        },
      },
    },
  },
  content: [
    "{routes,islands,components}/**/*.{ts,tsx,js,jsx}",
  ],
} satisfies Config;
