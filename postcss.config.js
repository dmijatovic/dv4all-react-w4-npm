module.exports = () => {
  //debugger
  return {
    plugins:[
      require('postcss-preset-env')({
        autoprefixer:{
          grid: true,
          flexbox: true,
        },
        stage:3
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
