module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "rp-black": "#000000",
        "mj-black": "#1A1A19",
        "jp-black": "#3B4046",
        "rp-yellow": "#F3C623",
        "mj-yellow": "#ffe31a",
        "jp-yellow": "#FFE31A",
        "blue-1": "#023e8a",
        "blue-2": "#0077b6",
        "blue-3": "#0096c7",
        "blue-4": "#00b4d8",
        "blue-5": "#48cae4",
        "blue-6": "#90e0ef",
        "blue-7": "#ade8f4",
        "violet-1": "#8e44ad", // Dark violet for accent
        "violet-2": "#b388eb", // Soft violet for background
        "violet-3": "#9b59b6", // Medium violet
      },
    },
    fontFamily: {
      lexend: ["Lexend Deca", "ui-sans-serif", "system-ui"],
    },
  },
  plugins: [],
};
