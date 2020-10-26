const webpack = require('webpack')
module.exports={
    chainWebpack:config=>{
      //删除编译后的独立js文件上的预获取操作
      config.plugins.delete("prefetch")
    },
    configureWebpack: {
      plugins: [
        new webpack.ProvidePlugin({
          $: "jquery",
          jQuery: "jquery"
        })
      ]
    },
    devServer:{
      proxy:{
        '/api':{
          target:`http://localhost:8888`,
          changeOrigin:true,
          pathRewrite:{
            '^/api':''
          }
        }
      }
    }
}
