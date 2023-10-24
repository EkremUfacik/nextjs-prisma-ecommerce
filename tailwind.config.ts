import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mydark: {
          primary: "#012340",
          secondary: "#072B73",
          accent: "#313940",
          neutral: "#8C6F56",
          "base-100": "#36495e",
          info: "#BFB3A8",
          success: "#3ce7d3",
          warning: "#c0720c",
          error: "#f53f32",
          body: {
            "background-color": "#010626",
          },
        },
      },
      {
        mylight: {
          primary: "#ce8037",

          secondary: "#bf93e2",

          accent: "#bdd6f9",

          neutral: "#1a2128",

          "base-100": "#e8ebf3",

          info: "#89a9e1",

          success: "#1b7e56",

          warning: "#e9943a",

          error: "#fb135d",
          body: {
            "background-color": "#ffffff",
          },
        },
      },
    ],
  },
};
export default config;
