<template>
  <div id="app" class="fonts background">
    <div class="app-container">
      <router-view />
    </div>
    <Toast />
  </div>
</template>

<script>
import { Toast } from '@/components/common';

export default {
  name: 'App',
  components: {
    Toast,
  },
};
</script>

<style lang="less">
#app {
  width: 100%;
  height: 100vh;
}

.fonts {
  font-family: Arial, Avenir, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.background {
  background-color: #ccc;
  background-image: url('~@/assets/bg.png');
  background-repeat: no-repeat;
  background-size: cover;
}

.app-container {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  // 横屏处理
  @media all and (orientation: landscape) {
    padding: 0 212px;
  }
  // 竖屏处理
  @media all and (orientation: portrait) {
    padding: 0 80px;
  }
}
</style>
