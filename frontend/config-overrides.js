const webpack = require('webpack');
const rewireLess = require('react-app-rewire-less');

const keys = require('./config-env.js');

const envVariables = {};
keys.forEach((key) => {
  envVariables[key] = JSON.stringify(process.env[key]);
});

function injectEnvVariables(config) {
  config.plugins.push(new webpack.DefinePlugin({
    'process.env' : Object.assign({
      NODE_ENV: JSON.stringify('development')
    }, envVariables)
  }));
  return config;
}

module.exports = function override(config, env) {
  config = rewireLess(config, env);
  config = injectEnvVariables(config);
  return config;
};
