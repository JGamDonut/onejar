const fs = require('fs');
const nunjucks = require('nunjucks');
const path = require('path');

require('dotenv').config({
  path: path.join(process.cwd(), '.env')
});

const packageJSON = JSON.parse(fs.readFileSync('./package.json').toString());

nunjucks.configure('src');

const output = nunjucks.render('styleguide/index.njk', {
  version: packageJSON.version,
  environment: process.env.hasOwnProperty('ENVIRONMENT_NAME') ? process.env.ENVIRONMENT_NAME : 'localdev'
});

// create the "build" folder if it does not exist
if (!fs.existsSync('build/styleguide')) {
  fs.mkdirSync('build/styleguide');
}

fs.writeFileSync(path.join('build', 'styleguide', 'index.html'), output);
