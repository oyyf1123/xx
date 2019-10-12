const path = require('path');

const ENV = require('./src/api/config')

function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('api', resolve('src/api'))
      .set('comp', resolve('src/components'))
      .set('api', resolve('src/api'))
      .set('views', resolve('src/views'))
      .set('pages', resolve('src/pages'))
      .set('store', resolve('src/store'))
      .set('utils', resolve('src/utils'))
      .set('router', resolve('src/router'))
      .set('mock', resolve('src/mock'))
  },
  devServer: {
    proxy: {
      '/shop ': {
        target: 'ENV.DEV.BACK_END_URL',
        changeOrigin: true,
      }
    }
  }
};