/* eslint-disable */
// https://docs.cypress.io/guides/guides/plugins-guide.html

const customWebpackConfig = require('./webpack.config');
const { startDevServer } = require('@cypress/webpack-dev-server');

module.exports = (on: any, config: any): void => {
  on('dev-server:start', (options: any) => {
    return startDevServer({
      options,
      webpackConfig: customWebpackConfig,
    });
  });

  // This doesn't work...
  // config.env = process.env;

  // This doesn't work either...
  // config.env.NODE_ENV = 'development';

  return config;
};
