const pug = require('pug');
const fs = require('fs');
const config = require('../config.json');

// Compile the source code
const compiledFunction = pug.compileFile('./src/index.pug');

// Render a set of data
fs.writeFile('./build/index.html', compiledFunction(config), (error) => {
  if (error) { return console.log(error); }
  else { console.log("File saved."); }
});
