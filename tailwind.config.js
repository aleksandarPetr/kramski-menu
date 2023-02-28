/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily: {
        TradeGothicLTStdRegular: ["Trade Gothic LT Std Bold Condensed No 20"],
        TradeGothicLTStdSemiBold: ["Trade Gothic LT Std Bold Condensed No 18"],
        TradeGothicLTStdBold: ["Trade Gothic LT Std Bold Condensed No 20"],
        TradeGothicLTStdMedium: ["Trade Gothic LT Std Bold No2"],
      },
    },
    colors: {
      turquoise: "#00CFD7",
      darkFontColor: "#333333",
    },
  },
  plugins: [],
};
