module.exports = {
  devServer: {
    proxy: {
      '/ajax': {
        target: 'http://m.maoyan.com', //目标源
        changeOrigin: true //修改目标源  为我们当前源
      },
      // '/foo': {
      //   target: '<other_url>'
      // }
    }
  }
}