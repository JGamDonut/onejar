import concurrently from 'concurrently';

concurrently([
  {
    command: 'npm:watch-public',
    name: 'public',
    prefixColor: 'bgYellow.gray.bold'
  },
  {
    command: 'npm:watch-sass',
    name: 'sass',
    prefixColor: 'magenta.bold'
  },
  {
    command: 'npm:watch-client',
    name: 'snowpack',
    prefixColor: 'bgGreen.gray.bold'
  },
  {
    command: 'npm:watch-index',
    name: 'snowpack',
    prefixColor: 'bgOrange.gray.bold'
  }
], {
  prefix: 'name',
  killOthers: ['failure', 'success'],
  inputStream: process.stdin
})
.then(success => {
  console.log('done');
  process.exit();
})
.catch(err => {
  console.log('quit with err');
  // console.error(err);
});
