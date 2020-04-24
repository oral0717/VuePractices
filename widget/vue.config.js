'use strict'

module.exports = {
  /**
   * You will need to set publicPath if you plan to deploy your site under a sub path,
   * for example GitHub Pages. If you plan to deploy your site to https://foo.github.io/bar/,
   * then publicPath should be set to "/bar/".
   * In most cases please use '/' !!!
   * Detail: https://cli.vuejs.org/config/#publicpath
   */
  devServer: {
    proxy: {
      '/api': {
        target: 'http://106.14.117.10:7300/mock/5e7447152f223c732355f31a/mall-admin-api/',
        changeOrigin: true
        // pathRewrite: {'/api/order/getAllArea' : ''}
      }
      // '/api':{
      //   target: 'https://cnodejs.org/api/v1/topics',
      //   changeOrigin: true,
      //   pathRewrite: {'^/api' : ''}
      // }
    }
  }

}
