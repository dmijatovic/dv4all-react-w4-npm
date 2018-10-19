/**
 * Defining different proxy settings
 * based on provided environment prop
 * @param {string} env expected options are: local, test, demo, acc
 */
module.exports = env =>{
  switch(env.toLowerCase()){
    case "local":
      return {
        '/api': 'https://directory.dev.nlx.minikube:30443'
      }
    case "test":
      return {
        '/api': 'https://test.nlx.io'
      }
    case "demo":
      return {
        '/api': 'https://demo.nlx.io'
      }
      //break;
    case "acc":
      return {
        '/api': 'http://acc.nlx.io'
      }
      //break;
    default:
      return null
  }
}
