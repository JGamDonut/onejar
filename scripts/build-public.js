import shell from 'shelljs';
import fs from 'fs';

const directories = [
  'src/public/images/favicons',
  'src/public/data/',
  'src/public/fonts/',
  'src/public/videos/'
];
const src = './src/';
const build = './public/';

// we want to ignore the large background files from being processed in dev mode.
// these images have their own processing 'build-images.js'
directories.forEach(function (dir) {
  // create the "public" folder if it does not exist
  if (!fs.existsSync(dir)) {
    return;
  }
  if (!fs.existsSync('./public/')) {
    fs.mkdirSync('./public/');
    if (!fs.existsSync('./public/images')) {
      fs.mkdirSync('./public/images');
    }
  }
  shell.rm('-rf', `${build}${dir}`);
  shell.cp('-Rf', `${src}${dir}`, `${build}${dir}`);
});
