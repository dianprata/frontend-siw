const purgecss = require("@fullhuman/postcss-purgecss");
module.exports= {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    require('postcss-rtl'),
    //Only add purgecss in production
    process.env.NODE_ENV === "production"? purgecss({
      content: [
        "./src/**/*.html",
        "./src/**/*.vue"
      ]
    }): ""
  ]
}
