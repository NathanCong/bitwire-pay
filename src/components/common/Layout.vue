<template>
  <div class="layout">
    <div class="layout-left">
      <div
        class="go-back"
        v-if="showGoBack"
        @click="goBackCallback">
        <span class="go-back-icon"></span>
        <span class="go-back-text">Back</span>
      </div>
      <slot name="layout-left-container"></slot>
    </div>
    <div class="layout-right">
      <slot name="layout-right-container"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Layout',
  props: {
    showGoBack: { // 是否显示返回按钮
      type: Boolean,
      required: false,
      default: false,
    },
    goBackCallback: { // 返回按钮回调函数
      type: Function,
      required: false,
      default: () => { console.log('handleGoBack'); },
    },
  },
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
  overflow: hidden;
  display: flex;
  // 横屏处理
  @media all and (orientation: landscape) {
    flex-direction: row;
  }
  // 竖屏处理
  @media all and (orientation: portrait) {
    flex-direction: column;
  }
}

.layout-left,
.layout-right {
  flex: 1;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.5);
  box-sizing: border-box;
  padding: 54px 60px;
  overflow-y: auto;
}

.layout-left {
  background-image: url('~@/assets/layout_left_bg.png');
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}

.go-back {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 46px;
  left: 60px;
  .go-back-icon {
    width: 36px;
    height: 36px;
    background-image: url('~@/assets/back_icon.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    margin-right: 20px;
  }
  .go-back-text {
    font-size: 36px;
    color: #fff;
  }
}
</style>
