module.exports = {
  plugins: [
    require('autoprefixer'),
    require('postcss-px-to-viewport')({
      unitToConvert: 'px', // (String) 需要转换的单位，默认为"px"
      viewportWidth: 2340, // (Number) 设计稿的视口宽度，一般是750
      unitPrecision: 3, // (Number) 单位转换后保留的精度（很多时候无法整除）
      viewportUnit: 'vmax', // (String) 希望使用的视口单位
      fontViewportUnit: 'vmax',
      minPixelValue: 1, // (Number) 设置最小的转换数值，如果为1的话，只有大于1的值会被转换
      mediaQuery: true, // (Boolean) 媒体查询里的单位是否需要转换单位
    }),
  ],
};
