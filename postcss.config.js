const path = require('path');

module.exports = ({ file }) => {
  const designWidth = file.dirname.includes(path.join('node_modules', 'vant')) ? 375 : 2340; // 兼容 vant 组件库样式转换关键代码
  return {
    plugins: {
      'autoprefixer': {},
      'postcss-px-to-viewport': {
        unitToConvert: 'px', // (String) 需要转换的单位，默认为"px"
        viewportWidth: designWidth, // (Number) 设计稿的视口宽度，一般是750
        unitPrecision: 6, // (Number) 单位转换后保留的精度（很多时候无法整除）
        viewportUnit: 'vmax', // (String) 希望使用的视口单位
        fontViewportUnit: 'vmax',
        selectorBlackList: [],
        minPixelValue: 1, // (Number) 设置最小的转换数值，如果为1的话，只有大于1的值会被转换
        mediaQuery: true, // (Boolean) 媒体查询里的单位是否需要转换单位
        exclude: [],
        landscape: false,
      },
    },
  };
};
