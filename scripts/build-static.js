const shell = require('shelljs');
const fs = require('fs');

const directories = [
  'images/favicons',
  'data/',
  'fonts/',
  'videos/'
];

const src = './src/static/';
const build = './build/';

directories.forEach(function (dir) {
  
  // create the "static" folder if it does not exist
  var _dir = `${src}${dir}`;
  if (!fs.existsSync(_dir)) {
    return;
  }

  if (!fs.existsSync(build)) {
    fs.mkdirSync(build);
    if (!fs.existsSync(`${build}images`)) {
      fs.mkdirSync(`${build}images`);
    }
  }
  shell.rm('-rf', `${build}${dir}`);
  shell.cp('-Rf', `${src}${dir}`, `${build}${dir}`);
});
