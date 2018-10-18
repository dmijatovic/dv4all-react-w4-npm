/**
 * Webpack custom settup
 * getConfig function loads proper webpack definitions object
 *
 * @param {string} env.wpf, webpack file name
 * @param {string} env.api, backend api environment
 */

/**
 * Get configuration file
 */
getConfig = env =>{
  debugger
  //load proxy module
  let p = require('./webpack/proxy');
  //get proxy
  let proxy = p(env.api);
  //if (!env) return null;
  switch(env.wpf.toLowerCase()){
    case "lib":
      f = require('./webpack/lib');
      //no proxy for lib
      //config = f(null);
      return f;
    case "example":
      //get proxy settings
      //proxy = p(env.api);
      //get basic settings
      f = require('./webpack/example');
      config = f(proxy);
      return config;
    default:
      console.log("Environment variable not defined env.wpf")
      return null;
  }
  //update proxy
}

module.exports = (env) =>{
  //debugger
  let config = getConfig(env);
  return config;
};