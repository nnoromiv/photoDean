import type { Config } from "tailwindcss";
import { default as flattenColorPalette } from "tailwindcss/lib/util/flattenColorPalette";

const config: Config = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-linear": "radial-gradient(#696C6D 0.3px, #ffffff 0.3px)",
        "dark-gradient-linear": "radial-gradient(#ffffff 0.3px, #191e24 0.3px)",
      },
      backgroundColor : {
        'dark': '#191e24'
      },
      backgroundSize: {
        '23': '23px 23px',
      },
      colors: {
        "whiteRabbit": " #f7ede8",
        "blue": " #B7CAD4",
        "grey": " #696C6D",
        "black": " #0E1112",
        "link": " #ABB1B4",
      },
      screens: {
        'lt': '1025px',
        'tb': '769px',
        'pn': '469px',
        'sm-pn': '376px',
        'xs-pn': '321px'

      },
      borderRadius : {
        'hero' : '30% 70% 70% 30% / 30% 35% 65% 70%',
        'about': '76% 24% 35% 65% / 56% 23% 77% 44% '
      },
      animation: {
        'moveIn': '3s ease-in-out moveIn forwards',
        'moveOut': '3s ease-in-out moveOut forwards'
      },
    },
  },
  plugins: [require('daisyui'), addVariablesForColors],
  daisyui: {
    themes: ["light", "dark",],
  },
};

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}

export default config;