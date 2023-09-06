const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000', // Node.js 서버 주소
        changeOrigin: true
      }
    }
  },
  chainWebpack: config => {
    config.module
      .rule('images')
      .test(/\.(png|jpe?g|gif|webp)(\?.*)?$/)
      .use('url-loader')
      .loader('url-loader')
      .tap(options => {
        // options 객체가 정의되지 않은 경우 초기화
        options = options || {};
        // 이미지 파일 크기가 10KB보다 작으면 Data URL로 인라인 처리
        options.limit = 10240;
        return options;
      });
  }
};






