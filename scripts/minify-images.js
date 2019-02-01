const imagemin = require('imagemin');

(async () => {
  const files = await imagemin(['src/assets/images/**/*.{jpeg,jpg,png}'], 'build/assets');
  console.log("Saved images");
})();