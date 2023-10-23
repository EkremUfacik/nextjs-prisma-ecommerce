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
        mytheme: {
          primary: "#111827",
          secondary: "#d832f2",
          accent: "#40c639",
          neutral: "#1e2738",
          "base-100": "#36495e",
          info: "#95b1e9",
          success: "#3ce7d3",
          warning: "#c0720c",
          error: "#f53f32",
          body: {
            "background-color": "#1f2937",
          },
        },
      },
    ],
  },
};
export default config;
