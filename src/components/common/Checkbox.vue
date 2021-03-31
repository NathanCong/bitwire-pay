<template>
  <span class="checkbox">
    <span class="checkbox-check" v-if="isActive"></span>
  </span>
</template>

<script>
export default {
  name: 'Checkbox',
  data() {
    return {
      isActive: true,
    };
  },
};
</script>

<style lang="less" scoped>
.checkbox {
  width: 38px;
  height: 38px;
  position: relative;
  background-color: #ded7d4;
  border-radius: 8px;
  .checkbox-check {
    width: 39px;
    height: 38px;
    background-image: url('~@/assets/check.png');
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    bottom: 4px;
    left: 0;
  }
}
</style>
