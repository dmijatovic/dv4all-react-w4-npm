
module.exports = env =>{
  switch(env.toLowerCase()){
    case "demo":
      return {
        '/api': 'https://demo.nlx.io'
      }
      //break;
    case "acc":
      return {
        '/api': 'http://acceptance.nlx.io'
      }
      //break;
    default:
      return null
  }
}