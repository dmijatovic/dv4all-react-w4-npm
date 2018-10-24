/**
 * postcss configuration module
 * include autoprefixer and enable
 * autoprefixes for grid and flexbox
 */
module.exports = () => {
  //console.log("postcss.config.js...running")
  return {
    plugins:[
      require('postcss-preset-env')({
        autoprefixer:{
          grid: true,
          flexbox: true
        }
      })
    ]
  }
}
