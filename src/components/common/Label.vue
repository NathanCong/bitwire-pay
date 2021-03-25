<template>
  <div class="label">
    <img class="label-logo" :src="logo" v-if="logo">
    <span class="label-value">{{ value }}</span>
  </div>
</template>

<script>
export default {
  name: 'Label',
  props: {
    logo: { // 标签 Logo
      type: String,
      required: false,
    },
    value: { // 标签内容
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="less" scoped>
.label {
  display: flex;
  align-items: center;
  .label-logo {
    width: 34px;
    height: auto;
    margin-right: 10px;
  }
  .label-value {
    font-size: 32px;
    color: #cb7940;
    text-align: left;
  }
}
</style>
