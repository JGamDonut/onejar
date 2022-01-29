import fs from 'fs';
import nunjucks from 'nunjucks';
import path from 'path';
import dotenv from 'dotenv';

const outputDir = 'public'; // 'build'

dotenv.config({
  path: path.join(process.cwd(), '.env')
});

const packageJSON = JSON.parse(fs.readFileSync('./package.json').toString());

nunjucks.configure('src');

const output = nunjucks.render('index.njk', {
  version: packageJSON.version,
  environment: process.env.hasOwnProperty('ENVIRONMENT_NAME') ? process.env.ENVIRONMENT_NAME : 'localdev'
});

// create the output directory folder if it does not exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

fs.writeFileSync(path.join(outputDir, 'index.html'), output);
