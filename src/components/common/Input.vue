<template>
  <div class="input">
    <input
      class="input-inner"
      :type="type"
      :value="value"
      :placeholder="placeholder"
      @input="$emit('input', $event.target.value)">
    <span class="input-check-logo" v-if="checked"></span>
  </div>
</template>

<script>
export default {
  name: 'Input',
  props: {
    type: { // Input 类型
      type: String,
      required: true,
    },
    value: { // 输入框值
      type: String,
      required: false,
      default: '',
    },
    placeholder: { // 默认显示文本
      type: String,
      required: false,
      default: '',
    },
    checked: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
};
</script>

<style lang="less" scoped>
.input {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  overflow: hidden;
  .input-inner {
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    background-color: #ded7d4;
    color: #573625;
    font-size: 36px;
    box-sizing: border-box;
    padding: 0 25px;
    text-align: left;
    &::placeholder {
      color: #fff;
      font-size: 28px;
    }
  }
  .input-check-logo {
    width: 48px;
    height: 48px;
    background-image: url('~@/assets/input_check_bg.png');
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    top: 12px;
    right: 15px;
  }
}
</style>
