<template>
  <input
    class="input"
    :type="type"
    :value="value"
    :placeholder="placeholder"
    @input="$emit('input', $event.target.value)"
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
    color: #fff;
    font-size: 28px;
  }
}
</style>
