const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  devServer: {
    port: 5000,
    open: true,
    proxy: {
      '/api': {
        target: 'https://news-at.zhihu.com',
        changeOrigin: true
      }
    }
  },

  chainWebpack: config => {
    //   修改文件引入自定义路径
    config.resolve.alias
      .set('src', resolve('src'))
      .set('styles', resolve('src/assets/styles'))
      .set('common', resolve('src/components/common'))
      .set('store', resolve('src/store'))
      .set('utils', resolve('src/utils'))
      .set('home', resolve('src/views/home'))
      .set('detail', resolve('src/views/detail'))
      .set('comment', resolve('src/views/comment'))
      .set('collect', resolve('src/views/collect'))
  },

  configureWebpack: {
    devtool: 'source-map'
  },

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [resolve('src/assets/styles/variable.less')]
    }
  }
}
