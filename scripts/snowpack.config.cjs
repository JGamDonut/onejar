/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  exclude: ['**/node_modules/**/*'],
  mount: {
    '../src': '/public',
    '../public': '/',
  },
  plugins: [
    [
      '@snowpack/plugin-webpack',
      {
        /* see "Plugin Options" below */
      },
      '@snowpack/plugin-sass',
      {
        compileOptions: {
          style: 'compressed'
        },
      },
    ],
  ],
  routes: [
    /* Enable an SPA Fallback in development: */
    // {"match": "routes", "src": ".*", "dest": "/index.html"},
  ],
  optimize: {
    bundle: true,
    minify: true,
    target: 'es2018',
  },
  packageOptions: {
    /* ... */
  },
  devOptions: {
    bundle: true,
  },
  buildOptions: {
    clean: true,
    out: '/public',
  },
};