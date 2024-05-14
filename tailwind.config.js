/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html, ts}"],
  theme: {
    colors: {
      black: "#000000",
      white: "#ffffff",
      gray1: "#d7d7d7",
      gray2: "#8f8f8f",
      gray3: "#4b4b4b",
      red: "#ff0000",
      green: "#00ff00",
      blue: "#0000ff",
    },
    fontSize: {
      label1: ["14px", { fontWeight: 500, lineHeight: "18px" }],
      label2: ["16px", { fontWeight: 500, lineHeight: "20px" }],
      label3: ["20px", { fontWeight: 500, lineHeight: "24px" }],
      body1: ["12px", { fontWeight: 400, lineHeight: "16px" }],
      body2: ["14px", { fontWeight: 400, lineHeight: "18px" }],
      body3: ["16px", { fontWeight: 400, lineHeight: "20px" }],
      body4: ["20px", { fontWeight: 400, lineHeight: "24px" }],
      title1: ["16px", { fontWeight: 600, lineHeight: "24px" }],
      title2: ["24px", { fontWeight: 600, lineHeight: "32px" }],
      title3: ["36px", { fontWeight: 600, lineHeight: "48px" }],
      header1: ["40px", { fontWeight: 700, lineHeight: "52px" }],
      header2: ["48px", { fontWeight: 700, lineHeight: "64px" }],
      header3: ["64px", { fontWeight: 700, lineHeight: "72px" }],
    },
  },
  plugins: [],
};
