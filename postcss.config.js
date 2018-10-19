module.exports = () => {
  console.log("postcss.config.js...running")
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
/*
NOTE! post-css-env will use
browserlist in package.json
module.exports={
  require('postcss-preset-env')({
      autoprefixer:{
        grid: true,
        flexbox: true
      },
      stage:3
    })
}*/
