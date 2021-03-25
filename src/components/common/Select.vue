<template>
  <div class="select">
    <img class="select-arrow" :src="SelectArrowImage">
    <div class="select-options" v-if="false"></div>
  </div>
</template>

<script>
import SelectArrowImage from '@/assets/select_arrow.png';

export default {
  name: 'Select',
  data() {
    return {
      SelectArrowImage,
    };
  },
};
</script>

<style lang="less" scoped>
.select {
  width: 100%;
  height: 100%;
  padding-left: 25px;
  border-radius: 8px;
  box-sizing: border-box;
  background-color: #ded7d4;
  position: relative;
  .select-arrow {
    width: 26px;
    height: 14px;
    position: absolute;
    top: 50%;
    right: 25px;
    transform: translateY(-50%);
  }
}
</style>
