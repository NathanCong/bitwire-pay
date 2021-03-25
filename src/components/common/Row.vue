<template>
  <div class="row">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Row',
};
</script>

<style lang="less" scoped>
.row {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
</style>
