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
const getConfig = env =>{
  let f;
  //debugger
  //load proxy module
  let p = require('./webpack/proxy');
  //get proxy
  let proxy = p(env.api);
  //get webpack config partial
  f = require(`./webpack/${env.wpf}`);
  //if (!env) return null;
  switch(env.wpf.toLowerCase()){
    case "lib":
      //no proxy for lib
      return f;
    case "demo":
    case "test":
    case "acc":
      //return with proxy settings
      return f(proxy);
    default:
      //eslint-disable-next-line
      console.log("Environment value of env.wpf not matched")
      return null;
  }
}

module.exports = (env) =>{
  //debugger
  let config = getConfig(env);
  return config;
};
