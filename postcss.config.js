module.exports = {
  plugins: {
    'postcss-px-to-viewport': {
      unitToConvert: 'px', // (String) 需要转换的单位，默认为"px"
      viewportWidth: 2340, // (Number) 设计稿的视口宽度，一般是750
      unitPrecision: 3, // (Number) 单位转换后保留的精度（很多时候无法整除）
      viewportUnit: 'vw', // (String) 希望使用的视口单位
      minPixelValue: 1, // (Number) 设置最小的转换数值，如果为1的话，只有大于1的值会被转换
      mediaQuery: false, // (Boolean) 媒体查询里的单位是否需要转换单位
      exclude: [/^node_modules$/], // (Array or Regexp) 忽略某些文件夹下的文件或特定文件，例如 'node_modules' 下的文件
      landscapeUnit: 'vw', // (String) 横屏时使用的单位
      landscapeWidth: 2340, // (Number) 横屏时使用的视口宽度
    },
  },
};
