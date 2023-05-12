const { defineConfig } = require('@vue/cli-service')
module.exports = {
  publicPath: process.env.NODE_ENV == 'development' ? '/' : '/nayangi/',
  transpileDependencies: true
}
