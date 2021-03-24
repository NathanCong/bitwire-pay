<template>
  <div class="layout">
    <div class="layout-left">
      <slot name="layout-left-content"></slot>
    </div>
    <div class="layout-right">
      <slot name="layout-right-content"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Layout',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.layout {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border-radius: 45px;
  box-shadow:
    0 8px 21px rgba(70, 62, 56, 0.09),
    8px 0 21px rgba(70, 62, 56, 0.09),
    0 -8px 21px rgba(70, 62, 56, 0.09),
    -8px 0 21px rgba(70, 62, 56, 0.09);
    // 0 8px 21px gray,
    // 8px 0 21px gray,
    // 0 -8px 21px gray,
    // -8px 0 21px gray;
  overflow: hidden;
  display: flex;
}

.layout-left,
.layout-right {
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.5);
  box-sizing: border-box;
  padding: 60px 54px;
}

.layout-left {
  background-image: url('~@/assets/layout_left_bg.png');
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
