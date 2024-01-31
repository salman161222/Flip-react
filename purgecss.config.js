// purgecss.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Add all your React files
    "./public/index.html",
  ],
  css: ["./src/**/*.css"], // Add all your CSS files
  extractors: [
    {
      extractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
      extensions: ["html", "js", "jsx", "ts", "tsx", "css"],
    },
  ],
};
