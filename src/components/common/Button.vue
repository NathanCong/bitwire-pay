<template>
  <div
    :class="['button', (disabled ? 'disabled' : '')]"
    @click="handleClick()">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Button',
  props: {
    disabled: { // 按钮禁用
      type: Boolean,
      required: false,
      default: false,
    },
  },
  methods: {
    handleClick() {
      if (this.disabled) {
        return;
      }
      this.$emit('click');
    },
  },
};
</script>

<style lang="less" scoped>
.button {
  width: 100%;
  height: 91px;
  line-height: 91px;
  border-radius: 14px;
  color: #fbfdfd;
  font-size: 46px;
  font-weight: bold;
  text-align: center;
  background-color: #ec793c;
  &.disabled {
    background-color: #d2d2d2;
  }
}
</style>
