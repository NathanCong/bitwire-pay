module.exports = {
  publicPath: '/',
  chainWebpack: (config) => {
    config.module.rule('images')
      .test(/\.(gif|png|jpe?g|svg)$/i)
      .use('image-webpack-loader')
      .loader('image-webpack-loader')
      .options({ bypassOnDebug: true })
      .end();
  },
};
