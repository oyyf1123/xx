const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set( 'api' , resolve( 'src/api' ) )
      .set( 'comp' , resolve( 'src/components' ) )
      .set( 'api' , resolve( 'src/api' ) )
      .set( 'views' , resolve( 'src/views' ) )
      .set( 'pages' , resolve( 'src/pages' ) )
      .set( 'store' , resolve( 'src/store' ) )
      .set( 'utils' , resolve( 'src/utils' ) )
      .set( 'router' , resolve( 'src/router' ) )
      .set( 'mock' , resolve( 'src/mock' ) )
  }
};
