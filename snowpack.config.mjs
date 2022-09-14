/** @type {import('snowpack').SnowpackUserConfig } */
export default {
  exclude: ['**/node_modules/**/*'],
  mount: {
    build: { url: '/', static: true },
  },
  plugins: [
    [
      '@snowpack/plugin-run-script', 
      {
        cmd: './node_modules/.bin/onchange \"src/static/**/*\" -- node ./scripts/build-static.js',
        watch: '$1 --watch',
      }
    ],
    [
      '@snowpack/plugin-run-script', 
      {
        cmd: 'sass --style=compressed --no-source-map src/static/scss:build/css',
        watch: '$1 --watch',
      }
    ],
    [
      '@snowpack/plugin-run-script',
      { 
        cmd: 'eleventy', 
        watch: '$1 --watch',
      }
    ],
    [
      '@snowpack/plugin-webpack', {},
    ]
  ],
  routes: [
    /* Enable an SPA Fallback in development: */
    // {'match': 'routes', 'src': '.*', 'dest': '/index.html'},
  ],
  optimize: {},
  /*optimize: {
    bundle: true,
    minify: true,
    target: 'es2018',
  },*/
  packageOptions: {},
  devOptions: {
    // bundle: true,
    hmrDelay: 300,
  },
  buildOptions: {
    clean: true,
    out: 'dist'
  },
};