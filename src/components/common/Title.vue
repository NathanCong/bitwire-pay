<template>
  <div class="title">{{ value }}</div>
</template>

<script>
export default {
  name: 'Title',
  props: {
    value: { // 标题内容
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="less" scoped>
.title {
  font-size: 46px;
  color: #cb7940;
  text-align: left;
}
</style>
