<template>
  <div class="label">{{ value }}</div>
</template>

<script>
export default {
  name: 'Label',
  props: {
    value: { // 标签内容
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="less" scoped>
.label {
  font-size: 32px;
  color: #cb7940;
  text-align: left;
}
</style>
