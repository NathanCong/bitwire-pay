<template>
  <div
    :class="['card', `br-${borderRadius}`]"
    :style="{ background: `rgba(${rgb},${opacity})` }"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    backgroundColor: { // 背景色
      type: String,
      required: false,
      default: '#fff',
    },
    opacity: { // 透明度
      type: Number,
      required: false,
      default: 1,
    },
    borderRadius: { // 圆角
      type: Number,
      required: false,
      default: 35,
    },
  },
  computed: {
    rgb() {
      return this.hexConvertRGB(this.backgroundColor);
    },
  },
  methods: {
    hexConvertRGB(hex) {
      const reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/; // 十六进制颜色值的正则表达式
      let color = hex.toLowerCase();
      let rgb = '';
      if (!color || !reg.test(color)) { // 格式校验
        return rgb;
      }
      if (color.length === 4) { // 颜色简写还原
        let newColor = '#';
        for (let i = 1; i < 4; i += 1) {
          newColor += color[i].repeat(2);
        }
        color = newColor;
      }
      if (color.length === 7) { // 处理六位的颜色值
        const colorRGBs = [];
        for (let i = 1; i < 7; i += 2) {
          colorRGBs.push(parseInt(`0x${color.slice(i, i + 2)}`, 16));
        }
        rgb = colorRGBs.join(',');
      }
      return rgb;
    },
  },
};
</script>

<style lang="less" scoped>
.card {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 50px 43px;
  overflow-y: auto;
  &.br-35 {
    border-radius: 35px;
  }
  &.br-40 {
    border-radius: 40px;
  }
}
</style>
