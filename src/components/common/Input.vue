<template>
  <input
    class="input"
    :type="type"
    :value="defaultValue"
    :placeholder="placeholder"
  >
</template>

<script>
export default {
  name: 'Input',
  props: {
    type: { // Input 类型
      type: String,
      required: true,
    },
    defaultValue: { // 输入框默认值
      type: String,
      required: false,
      default: '',
    },
    placeholder: { // 默认显示文本
      type: String,
      required: false,
      default: '',
    },
  },
};
</script>

<style lang="less" scoped>
.input {
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  background-color: #ded7d4;
  border-radius: 8px;
  color: #573625;
  font-size: 36px;
  box-sizing: border-box;
  padding: 0 25px;
  text-align: left;
  &::placeholder {
    font-size: 28px;
    color: #fff;
  }
}
</style>
