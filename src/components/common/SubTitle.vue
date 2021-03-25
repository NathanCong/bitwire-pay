<template>
  <div class="sub-title">{{ value }}</div>
</template>

<script>
export default {
  name: 'SubTitle',
  props: {
    value: { // 副标题内容
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="less" scoped>
.sub-title {
  font-size: 32px;
  color: #cb7940;
  text-align: left;
}
</style>
