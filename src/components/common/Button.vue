<template>
  <div class="button">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Button',
};
</script>

<style lang="less" scoped>
.button {
  width: 100%;
  height: 91px;
  line-height: 91px;
  background-color: #ec793c;
  border-radius: 16px;
  color: #fbfdfd;
  font-size: 46px;
  font-weight: bold;
  text-align: center;
}
</style>
